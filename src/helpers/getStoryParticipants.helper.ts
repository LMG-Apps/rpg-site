const getStoryParticipants = (friends: string, story_id: number) => {
  const storyParticpants = friends
    .split(',')
    .map((friend: string) => Number(friend.trim()))
    .map((friend_id: number) => {
      return {
        friend_id,
        story_id,
      }
    })

  return storyParticpants
}

export default getStoryParticipants
