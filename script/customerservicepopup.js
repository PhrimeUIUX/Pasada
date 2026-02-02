const overlay = document.getElementById("supportOverlay");
const openBtn = document.querySelector(".contact-customer-service");
const closeBtn = document.querySelector(".support-close");

function openOverlay() {
  setTimeout(() => {
    overlay.classList.remove("hidden");
  }, 150);
}

function closeOverlay() {
  overlay.classList.add("hidden");
  document.body.style.overflow = ""; // restore background scroll
}

openBtn?.addEventListener("click", openOverlay);
closeBtn?.addEventListener("click", closeOverlay);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeOverlay();
  }
});

const supportData = {
  primary: {
    id: "jonathanorbiso",
    name: "Jonathan Orbiso",
    phone: "0968 641 0532",
    tel: "09686410532",
    badge: "Recommended",
    label: "Primary Support Admin"
  },
  others: [
    { name: "Miguel Gacho", phone: "0918 910 0445", tel: "09189100445" },
    { name: "Mike Tindog", phone: "0909 726 1642", tel: "09097261642" },
    { name: "Mike Tindog", phone: "0994 734 5087", tel: "09947345087" },
    { name: "Jesus Bisco", phone: "0970 809 2344", tel: "09708092344" },
    { name: "Rodel Valdez", phone: "0991 272 6375", tel: "09912726375" },
    { name: "Jing Bacosa", phone: "0910 076 4811", tel: "09100764811" },
    { name: "Nercielito “Nene”", phone: "0992 027 2940", tel: "09920272940" },
    { name: "Darwin Donaire", phone: "0993 059 8005", tel: "09930598005" }
  ]
};


const primaryContainer = document.getElementById("primarySupport");
const otherContainer = document.getElementById("otherSupport");

// Render Primary Support
const primary = supportData.primary;
primaryContainer.innerHTML = `
  <a href="tel:${primary.tel}" id="${primary.id}" class="support-card primary">
    <span class="badge" aria-label="Recommended">${primary.badge}</span>
    <h3>${primary.name}</h3>
    <span class="number">${primary.phone}</span>
    <small>${primary.label}</small>
  </a>
`;

// Render Other Agents
otherContainer.innerHTML = supportData.others.map(agent => `
  <a href="tel:${agent.tel}" class="support-card">
    <h4>${agent.name}</h4>
    <span>${agent.phone}</span>
  </a>
`).join('');

