const postTypeSelect = document.getElementById("postType");
const imageUploadSection = document.getElementById("imageUpload");
const videoUploadSection = document.getElementById("videoUpload");
const eventInfoSection = document.getElementById("eventInfo");

postTypeSelect.addEventListener("change", () => {
  const postType = postTypeSelect.value;
  if (postType === "image") {
    showUploadSection(imageUploadSection);
    hideUploadSection(videoUploadSection);
    hideUploadSection(eventInfoSection);
  } else if (postType === "video") {
    showUploadSection(videoUploadSection);
    hideUploadSection(imageUploadSection);
    hideUploadSection(eventInfoSection);
  } else if (postType === "event") {
    showUploadSection(eventInfoSection);
    hideUploadSection(imageUploadSection);
    hideUploadSection(videoUploadSection);
  } else {
    hideUploadSection(imageUploadSection);
    hideUploadSection(videoUploadSection);
    hideUploadSection(eventInfoSection);
  }
});

function showUploadSection(section) {
  section.classList.add("show");
}

function hideUploadSection(section) {
  section.classList.remove("show");
}
