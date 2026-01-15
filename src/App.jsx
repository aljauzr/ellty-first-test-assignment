import { useState } from 'react'
import './App.css'

const pageItems = Array.from({ length: 6 }, (_, i) => `Page ${i + 1}`)

function App() {
  const [selectedPages, setSelectedPages] = useState(
    () => pageItems.map(() => false)
  )

  const allSelected = selectedPages.every(Boolean)

  const handleToggleAll = () => {
    const nextValue = !allSelected
    setSelectedPages(selectedPages.map(() => nextValue))
  }

  const handleTogglePage = (index) => {
    setSelectedPages((prev) =>
      prev.map((value, itemIndex) => (itemIndex === index ? !value : value))
    )
  }

  return (
    <div className="app">
      <div className="canvas">
        <div className="card">
          <label className="card-row card-row--clickable card-row--full">
            <span className="all-pages-label">All pages</span>
            <span className="checkbox-control">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleToggleAll}
                aria-label="Select all pages"
              />
              <span className="checkbox checkbox--interactive">
                <svg
                  className="checkbox-icon"
                  viewBox="0 0 15.64 11.04"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5.52 L5.64 11.04 L15.64 0"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
            </span>
          </label>
          <div className="divider" />
          <div className="page-list">
            {pageItems.map((page, index) => (
              <label className="card-row card-row--clickable" key={page}>
                <span className="page-label">{page}</span>
                <span className="checkbox-control">
                  <input
                    type="checkbox"
                    checked={selectedPages[index]}
                    onChange={() => handleTogglePage(index)}
                    aria-label={`Select ${page}`}
                  />
                  <span className="checkbox checkbox--interactive">
                    <svg
                      className="checkbox-icon"
                      viewBox="0 0 15.64 11.04"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 5.52 L5.64 11.04 L15.64 0"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </span>
              </label>
            ))}
          </div>
          <div className="divider" />
          <div className="button-frame">
            <button className="btn btn--primary" type="button">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
