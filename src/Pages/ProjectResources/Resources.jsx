import React from 'react'
import { useTheme } from '../../Context/Theme-Context'

const Resources = () => {
  const { themeObject } = useTheme();
  return (
    <div className="h-full flex flex-col">
      <div className="resources-input flex">
        <input
          type="text"
          style={{ backgroundColor: themeObject.primary }}
          className="h-14 w-4/5 m-8 rounded-2xl p-2"
          placeholder="Paste resource links here..."
        />
        <button className="h-14 w-32 bg-cyan-500 hover:bg-cyan-600 rounded-3xl mt-8 mr-8">
          Add
        </button>
      </div>

      <div className="resources  flex-col wrap">
        <div
          className="resource h-14 w-4/5 m-8 rounded-3xl p-2 flex justify-start items-center text-cyan-600 font-bold underline"
          style={{
            backgroundColor: themeObject.primary,
          }}
        >
          <a
            target="_blank"
            href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwim2trr7c33AhW9zDgGHbYnBToQPAgI"
          >
            Link 1
          </a>
          <span className="material-icons search-icon ml-auto no-underline">
            content_copy
          </span>
          <span className="material-icons search-icon ml-2 no-underline">
            delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default Resources