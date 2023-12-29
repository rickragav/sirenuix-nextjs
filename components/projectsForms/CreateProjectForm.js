// components/CreateProjectForm.js
import { useState } from "react";

const CreateProjectForm = () => {
  const [formData, setFormData] = useState({
    slug: "",
    seo: { title: "", description: "" },
    baseImage: "",
    projectInfo: {
      projectObjectives: { title: "", description: "" },
      projectHighlights: { title: "", descriptions: [] },
      projectBriefDetails: "",
      projectImages: [],
    },
    socialMediaLinks: [{ name: "", image: "", url: "" }],
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSeoInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      seo: { ...prevData.seo, [field]: value },
    }));
  };

  const handleProjectInfoInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      projectInfo: { ...prevData.projectInfo, [field]: value },
    }));
  };

  const handleProjectObjectivesInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      projectInfo: {
        ...prevData.projectInfo,
        projectObjectives: {
          ...prevData.projectInfo.projectObjectives,
          [field]: value,
        },
      },
    }));
  };

  const handleProjectHighlightsInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      projectInfo: {
        ...prevData.projectInfo,
        projectHighlights: {
          ...prevData.projectInfo.projectHighlights,
          [field]: value,
        },
      },
    }));
  };

  const handleSocialMediaLinksInputChange = (field, value, index) => {
    const updatedLinks = [...formData.socialMediaLinks];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    setFormData((prevData) => ({
      ...prevData,
      socialMediaLinks: updatedLinks,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/projects/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl space-y-5 mx-auto bg-gray-800 p-6 rounded-md text-white"
    >
      <label className="flex flex-col space-y-2 mb-2">
        <span> Slug:</span>
        <input
          type="text"
          value={formData.slug}
          onChange={(e) => handleInputChange("slug", e.target.value)}
          className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
        />
      </label>

      <label className="flex flex-col space-y-2 mb-2">
        <span>SEO Title:</span>
        <input
          type="text"
          value={formData.seo.title}
          onChange={(e) => handleSeoInputChange("title", e.target.value)}
          className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
        />
      </label>

      <label className="block mb-2">
        SEO Description:
        <input
          type="text"
          value={formData.seo.description}
          onChange={(e) => handleSeoInputChange("description", e.target.value)}
          className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
        />
      </label>

      {/* Project Info Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Project Info</h2>

        <label className="block mb-2">
          Project Objectives Title:
          <input
            type="text"
            value={formData.projectInfo.projectObjectives.title}
            onChange={(e) =>
              handleProjectObjectivesInputChange("title", e.target.value)
            }
            className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
          />
        </label>

        <label className="block mb-2">
          Project Objectives Description:
          <input
            type="text"
            value={formData.projectInfo.projectObjectives.description}
            onChange={(e) =>
              handleProjectObjectivesInputChange("description", e.target.value)
            }
            className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
          />
        </label>

        <label className="block mb-2">
          Project Highlights Title:
          <input
            type="text"
            value={formData.projectInfo.projectHighlights.title}
            onChange={(e) =>
              handleProjectHighlightsInputChange("title", e.target.value)
            }
            className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
          />
        </label>

        <label className="block mb-2">
          Project Highlights Descriptions (comma-separated):
          <input
            type="text"
            value={formData.projectInfo.projectHighlights.descriptions.join(
              ","
            )}
            onChange={(e) =>
              handleProjectHighlightsInputChange(
                "descriptions",
                e.target.value.split(",")
              )
            }
            className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
          />
        </label>

        <label className="block mb-2">
          Project Brief Details:
          <input
            type="text"
            value={formData.projectInfo.projectBriefDetails}
            onChange={(e) =>
              handleProjectInfoInputChange(
                "projectBriefDetails",
                e.target.value
              )
            }
            className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
          />
        </label>

        {/* Add input fields for other properties of projectInfo */}
        {/* ... */}
      </div>

      {/* Social Media Links Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Social Media Links</h2>

        {formData.socialMediaLinks.map((link, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              value={link.name}
              onChange={(e) =>
                handleSocialMediaLinksInputChange("name", e.target.value, index)
              }
              placeholder="Name"
              className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
            />
            <input
              type="text"
              value={link.image}
              onChange={(e) =>
                handleSocialMediaLinksInputChange(
                  "image",
                  e.target.value,
                  index
                )
              }
              placeholder="Image URL"
              className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
            />
            <input
              type="text"
              value={link.url}
              onChange={(e) =>
                handleSocialMediaLinksInputChange("url", e.target.value, index)
              }
              placeholder="URL"
              className="block w-full mt-1 p-2 border rounded-md bg-gray-700 text-white"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              socialMediaLinks: [
                ...prevData.socialMediaLinks,
                { name: "", image: "", url: "" },
              ],
            }))
          }
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Add Link
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
      >
        Create Project
      </button>
    </form>
  );
};

export default CreateProjectForm;
