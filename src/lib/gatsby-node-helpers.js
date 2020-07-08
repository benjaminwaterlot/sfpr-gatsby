exports.logErrors = (errors) => {
  errors.forEach((e) => console.error(e.toString()))
  return Promise.reject(errors)
}

exports.paginate = ({
  createPage,
  itemsNumber,
  itemsPerPage,
  getPath,
  component,
  context,
}) => {
  const numberOfPages = Math.ceil(itemsNumber / itemsPerPage) || 1

  Array(numberOfPages)
    .fill()
    .forEach((_, idx) => {
      createPage({
        path: getPath(idx + 1),
        component,
        context: {
          itemsPerPage: itemsPerPage,
          currentPage: idx + 1,
          from: idx * itemsPerPage,
          numberOfPages,
          ...context,
        },
      })
    })
}
