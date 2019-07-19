import Api from '@/services/Api'

export default {
  fetchActions () {
    return Api().get('actions')
  },
  updateAction (params) {
    return Api().put('actions/' + params.id, params)
  },
  getAction (params) {
    return Api().get('action/' + params.id)
  },
  addAction (params) {
    return Api().post('actions', params)
  },
  deleteAction (id) {
    return Api().delete('actions/' + id)
  }
}