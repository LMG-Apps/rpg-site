const getStoryMembers = (members: string, story_id: number) => {
  const storyMembers = members
    .split(',')
    .map((member: string) => Number(member.trim()))
    .map((member_id: number) => {
      return {
        member_id,
        story_id,
      }
    })

  return storyMembers
}

export default getStoryMembers
