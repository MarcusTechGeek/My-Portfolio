const longUrlInput = document.getElementById('longUrl');
const customAliasInput = document.getElementById('customAlias');
const urlNicknameInput = document.getElementById('urlNickname');
const expirationDaysInput = document.getElementById('expirationDays');
const shortenBtn = document.getElementById('shortenBtn');
const urlTableBody = document.getElementById('urlTableBody');

// Function to save URL data in session storage
function saveUrlData(shortUrl, longUrl, customAlias, expirationDays, urlNickname) {
  const urlData = {
    longUrl: longUrl,
    customAlias: customAlias,
    expirationDays: expirationDays,
    urlNickname: urlNickname || '',
    visits: 0
  };
  // Save data in session storage
  sessionStorage.setItem(shortUrl, JSON.stringify(urlData));
}

// Replace with your server-side URL shortening logic
function shortenUrl(longUrl, customAlias, expirationDays, urlNickname) {
  const shortUrl = `https://short.en/${customAlias || generateRandomString()}`;
  // Save URL data in session storage
  saveUrlData(shortUrl, longUrl, customAlias, expirationDays, urlNickname);
  return shortUrl;
}

function generateRandomString() {
  // Generate a random string for the short URL
  return Math.random().toString(36).substr(2, 6);
}

shortenBtn.addEventListener('click', () => {
  const longUrl = longUrlInput.value;
  const customAlias = customAliasInput.value;
  const urlNickname = urlNicknameInput.value;
  const expirationDays = expirationDaysInput.value;

  if (!longUrl) {
    alert('Please enter a long URL.');
    return;
  }

  const shortUrl = shortenUrl(longUrl, customAlias, expirationDays, urlNickname);

  // Add the new URL to the table
  addUrlToTable(urlNickname, shortUrl);
});

// Function to open the long URL
function openLongUrl(shortUrl) {
  const urlData = JSON.parse(sessionStorage.getItem(shortUrl));
  if (urlData && urlData.longUrl) {
    window.location.href = urlData.longUrl;
  } else {
    console.error('Short URL not found or expired.');
  }
}

// Function to add a URL to the table
function addUrlToTable(nickname, shortUrl) {
  const row = document.createElement('tr');
  const nicknameCell = document.createElement('td');
  const shortUrlCell = document.createElement('td');
  const actionsCell = document.createElement('td');

  nicknameCell.textContent = nickname;
  shortUrlCell.innerHTML = `<a href="#" onclick="openLongUrl('${shortUrl}'); return false;">${shortUrl}</a>`;
  actionsCell.innerHTML = `<button class="btn btn-danger btn-sm" onclick="deleteUrl('${shortUrl}')">Delete</button>`;

  row.appendChild(nicknameCell);
  row.appendChild(shortUrlCell);
  row.appendChild(actionsCell);

  urlTableBody.appendChild(row);
}

// Function to delete a URL from session storage and the table
function deleteUrl(shortUrl) {
  sessionStorage.removeItem(shortUrl);
  const rows = urlTableBody.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    const urlCell = cells[1];
    if (urlCell.innerHTML.includes(shortUrl)) {
      urlTableBody.removeChild(rows[i]);
      break;
    }
  }
}

// Load existing URLs from session storage and add them to the table
for (let i = 0; i < sessionStorage.length; i++) {
  const key = sessionStorage.key(i);
  const urlData = JSON.parse(sessionStorage.getItem(key));
  addUrlToTable(urlData.urlNickname, key);
}

// Check if the current page is accessed through a shortened URL
if (window.location.pathname !== '/') {
  const shortUrl = window.location.pathname.substr(1); // Remove leading '/'
  openLongUrl(shortUrl);
}