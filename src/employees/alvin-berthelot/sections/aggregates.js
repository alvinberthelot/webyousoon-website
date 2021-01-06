module.exports = function (aggregate) {
  const displayKnowledge = (knowledge) => `
<li>
  <span class="text-xs italic">
    ${knowledge}
  </span>
</li>
`

  const displaySubstack = (substack) => `
<li class="my-4">
  <span class="text-sm">
    ${substack.title}
  </span>
  <span>
    <ul>${substack.knowledges.map(displayKnowledge).join(``)}</ul>
  </span>
</li>
`

  const displayStack = (stack) => `
<li class="mx-6 flex-grow">
  <span class="text-lg text-black text-opacity-80 font-bold">
    ${stack.title}
  </span>
  <span class="">
    <ul>${stack.substacks.map(displaySubstack).join(``)}</ul>
  </span>
</li>
`
  const stacks = aggregate.stacks.map(displayStack).join(``)

  return `
<div id="aggregate">
  <div class="stacks-title-horizontal">
    <h3 class="title">
      ${aggregate.title}
    </h3>
  </div>
  <div class="stacks">
    <ul class="list-square list-outside flex flex-wrap">
      ${stacks}
    </ul>
  </div>
  <div class="stacks-title-vertical">
    <h3 class="title">
      ${aggregate.title}
    </h3>
  </div>
</div>
`
}
