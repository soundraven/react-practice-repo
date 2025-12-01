// StoryTray.jsx
export default function StoryTray({ stories }) {
  // stories.push({
  //   id: "create",
  //   label: "Create Story",
  // })
  let storiesToDisplay = stories.slice()
  storiesToDisplay.push({ id: 3, label: "Create Story" })
  return (
    <ul>
      {storiesToDisplay.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
      {/* <li>Create Story</li> */}
    </ul>
  )
}
