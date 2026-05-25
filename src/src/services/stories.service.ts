import { storiesMock } from '../data/stories.mock'
import type { IStory } from '../interfaces/story.interface'

export async function getStories(): Promise<IStory[]> {
  return Promise.resolve([...storiesMock])
}

export async function getStoryById(id: string): Promise<IStory | undefined> {
  return Promise.resolve(storiesMock.find((story) => story.id === id))
}
