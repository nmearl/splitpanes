export default {
  'name': 'pane',
  'props': {
    'size': {
      'type': [Number, String],
      'required': false,
      'default': undefined
    },
    'minSize': {
      'type': [Number, String],
      'required': false,
      'default': 0
    },
    'maxSize': {
      'type': [Number, String],
      'required': false,
      'default': 100
    }
  },
  'data': () => ({
    'style': {}
  }),
  'computed': {
    sizeNumber () {
      return parseFloat(this.size)
    },
    minSizeNumber () {
      return parseFloat(this.minSize)
    },
    maxSizeNumber () {
      return parseFloat(this.maxSize)
    }
  },
  'watch': {
    sizeNumber (size) {
      this.$parent.requestUpdate({
        'target': this,
        size
      });
      this.$emit('size', size);
    },
    minSizeNumber (min) {
      this.$parent.requestUpdate({
        'target': this,
        min
      });
      this.$emit('min_size', min);
    },
    maxSizeNumber (max) {
      this.$parent.requestUpdate({
        'target': this,
        max
      });
      this.$emit('max_size', max);
    }
  },
  'methods': {
    update (style) {
      this.style = style
    }
  },
  render (h) {
    return h(
      'div',
      {
        'class': ['splitpanes__pane'],
        'style': this.style
      },
      this.$slots.default
    )
  }
}
