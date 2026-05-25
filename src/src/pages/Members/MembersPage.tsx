import { useEffect, useState } from 'react'
import { AnimatedTitle } from '../../components/AnimatedTitle'
import { MemberCard } from '../../components/MemberCard'
import type { IMember } from '../../interfaces/member.interface'
import { getMembers } from '../../services/members.service'

export function MembersPage() {
  const [members, setMembers] = useState<IMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    getMembers().then((data) => {
      if (active) {
        setMembers(data)
        setLoading(false)
      }
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <AnimatedTitle
        title="Integrantes"
        subtitle="Cada miembro del grupo comparte su rol, una breve descripción y un audio de presentación."
      />

      {loading ? (
        <p className="mt-12 text-center text-ink-muted">Cargando integrantes…</p>
      ) : (
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}
