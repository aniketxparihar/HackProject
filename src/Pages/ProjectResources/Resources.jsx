import { React, useEffect,useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useResources } from "../../Context/ResourceContext";
import { useTheme } from "../../Context/Theme-Context";

const Resources = () => {
  const { themeObject } = useTheme();
  const location = useLocation();
  const len = location.pathname.substring(10).length;
  const endlink = location.pathname.substring(10);
  const projectId = endlink.substring(0, len - 10);

  const { input, resources, setProjectId, changeHandler, handleSubmit,handleResourceDelete } =
    useResources();
  useEffect(() => {
    setProjectId(projectId);
  }, []);
  const copyToClipboard = (link) => {
     navigator.clipboard.writeText(link);
   };
  return (
    <div className="h-full flex flex-col">
      <div className="resources-input flex">
        <input
          type="text"
          style={{ backgroundColor: themeObject.primary,color:themeObject.text }}
          className="h-14 w-4/5 m-8 rounded-2xl p-2"
          placeholder="Paste resource links here..."
          value={input}
          onChange={changeHandler}
        />
        <button
          className="h-14 w-32 bg-cyan-500 hover:bg-cyan-600 rounded-3xl mt-8 mr-8"
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
      </div>

      <div className="resources  flex-col wrap">
        {resources.map((resource) => {
          return (
            <div
              className="resource h-16 w-4/5 m-8 rounded-3xl p-2 flex justify-start items-center text-cyan-600 font-bold underline"
              style={{
                backgroundColor: themeObject.primary,
              }}
              key={resource.id}
            >
              <a target="_blank" href={resource.resourceLink}>
                {resource.resourceLink}
              </a>
              <span
                className="material-icons search-icon ml-auto no-underline cursor-pointer"
                onClick={()=>copyToClipboard(resource.resourceLink)}
              >
                content_copy
              </span>
              <span
                className="material-icons cursor-pointer search-icon ml-2 no-underline"
                onClick={() => handleResourceDelete(projectId, resource.id)}
              >
                delete
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
