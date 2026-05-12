import { Fragment } from 'react';

function setProp(element, name, value) {
  if (name === 'children' || value == null || value === false) return;
  if (name === 'className') element.setAttribute('class', value);
  else if (name === 'htmlFor') element.setAttribute('for', value);
  else if (name === 'style' && typeof value === 'object') Object.assign(element.style, value);
  else if (name.startsWith('on') && typeof value === 'function') element.addEventListener(name.slice(2).toLowerCase(), value);
  else if (value === true) element.setAttribute(name, '');
  else element.setAttribute(name, String(value));
}

function mount(vnode) {
  if (vnode == null || vnode === false || vnode === true) return document.createTextNode('');
  if (typeof vnode === 'string' || typeof vnode === 'number') return document.createTextNode(String(vnode));
  if (Array.isArray(vnode)) {
    const fragment = document.createDocumentFragment();
    vnode.forEach((child) => fragment.appendChild(mount(child)));
    return fragment;
  }
  if (typeof vnode.type === 'function') return mount(vnode.type({ ...(vnode.props || {}), key: vnode.key }));
  if (vnode.type === Fragment) return mount(vnode.props?.children);
  const element = document.createElementNS(vnode.type === 'svg' || vnode.props?.xmlns ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml', vnode.type);
  const props = vnode.props || {};
  Object.entries(props).forEach(([name, value]) => setProp(element, name, value));
  mountChildren(element, props.children);
  return element;
}

function mountChildren(parent, children) {
  if (Array.isArray(children)) children.forEach((child) => parent.appendChild(mount(child)));
  else if (children != null) parent.appendChild(mount(children));
}

export function createRoot(container) {
  return {
    render(node) {
      container.textContent = '';
      container.appendChild(mount(node));
    },
  };
}
