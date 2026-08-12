import { createChecklist } from "./checklist.js";

const destinationElement =
  document.getElementById("destination");

const daysElement =
  document.getElementById("days");

const generateButton =
  document.getElementById("generate");

const resultElement =
  document.getElementById("result");

function renderChecklist(data) {
  const list = data.items
    .map(
      (item, index) => `
        <li>
          <label>
            <input
              type="checkbox"
              id="item-${index}"
            >

            <span>
              ${item}
            </span>
          </label>
        </li>
      `
    )
    .join("");

  resultElement.innerHTML = `
    <h2>
      چک‌لیست سفر به ${data.destination}
    </h2>

    <p>
      مدت سفر:
      <strong>${data.days} روز</strong>
    </p>

    <ul class="checklist">
      ${list}
    </ul>
  `;
}

function generate() {
  const destination =
    destinationElement.value;

  const days =
    Number(daysElement.value);

  if (!days || days < 1) {
    alert(
      "لطفاً مدت سفر را وارد کنید."
    );

    return;
  }

  const checklist =
    createChecklist(
      destination,
      days
    );

  renderChecklist(checklist);
}

generateButton.addEventListener(
  "click",
  generate
);

generate();
