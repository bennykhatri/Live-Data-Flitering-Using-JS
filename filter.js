// Our own dummy data
const notes = [
  {
    title: "Order Cat Food"
  },
  {
    title: "Clean Kitchen"
  },
  {
    title: "Learn Javascript"
  },
  {
    title: "Make a new video"
  },
  {
    title: "Take a bath"
  }
]

// Store the value retrieved fromt the input field
const filter = {
  searchedText: ""
}

// Logic to match the query and how to render it to the div
const renderNotes = function(notes, filter) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filter.searchedText.toLowerCase())
  })

  document.querySelector("#notes").innerHTML = ""

  filteredNotes.forEach(function(note) {
    const el = document.createElement("p")
    el.textContent = note.title
    document.querySelector("#notes").appendChild(el)
  })
}

// To fetch the value from the input field and assign it to the filter object.
document.querySelector("#search-text").addEventListener("input", function(e) {
  filter.searchedText = e.target.value
  renderNotes(notes, filter)
})
