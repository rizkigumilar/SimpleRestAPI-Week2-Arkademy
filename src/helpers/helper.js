module.exports = {

  response: (res, result, status) => {
    let resultPrint = {}

    if (result) {

      if (result[0]) {
        resultPrint.status_code = status || 200
        resultPrint.result = result
      } else {
        resultPrint.status_code = 404
        resultPrint.result = 'data not found'
      }
    }
    return res.status(resultPrint.status_code).json(resultPrint)
  },

  responPost: (res, result, status) => {

    let print = {}
    print.status = status
    print.result = result
    return res.status(status).json(print);
  },

  responDelete: (res, result, status) => {
    let print = {}
    print.status = status
    print.message = "Id Book " + result + " Has Been Delete"
    return res.status(status).json(print)
  }
}