const SCOPE = "some scope stuff";

function onSubmit() {
  const params = new URLSearchParams(window.location.search);

  const redirect_uri = params.get("redirect_uri");
  const state = params.get("state");

  const profileSelect = document.getElementById("profile-select");
  const profileId = profileSelect?.value;

  const emailInput = document.getElementById("email-input");
  const email = emailInput?.value?.trim();

  const subInput = document.getElementById("sub-input");
  const sub = subInput?.value?.trim();

  const code = (email || sub)
    ? btoa(JSON.stringify({ profileId, email: email || undefined, sub: sub || undefined }))
    : profileId;

  const newParams = new URLSearchParams();
  newParams.append("state", state);
  newParams.append("code", code);
  newParams.append("scope", SCOPE);
  newParams.append("authuser", "0");
  newParams.append("prompt", "none");

  window.location.href = `${redirect_uri}?${newParams.toString()}`;
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit-button").addEventListener("click", onSubmit);
});
