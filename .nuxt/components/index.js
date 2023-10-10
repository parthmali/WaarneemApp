export { default as Slider } from '../../components/slider.vue'
export { default as DatePicker } from '../../components/date-picker/index.vue'
export { default as IconMdiArrowDown } from '../../components/icon/MdiArrowDown.vue'
export { default as IconMdiArrowUp } from '../../components/icon/MdiArrowUp.vue'
export { default as IconMdiCalendar } from '../../components/icon/MdiCalendar.vue'
export { default as IconMdiClock } from '../../components/icon/MdiClock.vue'
export { default as IconMdiClose } from '../../components/icon/MdiClose.vue'
export { default as IconMdiPen } from '../../components/icon/MdiPen.vue'
export { default as ShiftCard } from '../../components/shift/card.vue'
export { default as Shift } from '../../components/shift/index.vue'
export { default as Sidebar } from '../../components/sidebar/index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
