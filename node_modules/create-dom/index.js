((root, factory) => {
  if (typeof define === 'function' && define.amd) {
    define([root.document], factory)
  }
  else if (typeof exports === 'object') {
    module.exports = factory(root.document)
  }
  else {
    root.createDom = factory(root.document)
  }
})(this, (document) => (tag, attributes = {}, ...children) => {
  const element = document.createElement(tag)
  for (let attribute in attributes) {
   if (attributes.hasOwnProperty(attribute)) {
     element.setAttribute(attribute, attributes[attribute])
   }
  }
  const fragment = document.createDocumentFragment()
  children.forEach((child) => {
   if (typeof child === 'string') {
     child = document.createTextNode(child)
   }
   fragment.appendChild(child)
  })
  element.appendChild(fragment)
  return element
})
