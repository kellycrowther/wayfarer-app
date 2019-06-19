const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 22,
  h6: 20,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
}

const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
  },
  h5: {
    fontSize: size.h5,
  },
  h6: {
    fontSize: size.h6,
  },
  normal: {
    fontSize: size.regular,
  },
}

const textShadow = {
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 10,
}

export default {
  size,
  style,
  textShadow,
}
