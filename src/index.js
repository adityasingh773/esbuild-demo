import newComponent from './components';
import css from './index.module.css';

export default function init() {
    const doc = document.createElement("div");
    doc.innerHTML = "Hello world";
    doc.className = css.doc;

    const newElement = newComponent();
    doc.appendChild(newElement);

    document.body.appendChild(doc);
}
