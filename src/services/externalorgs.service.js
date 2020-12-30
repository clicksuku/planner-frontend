
import http from '../common/http-common'


class ExternalOrgsService
{
    getAll() {
        return http.get(`api/externalorgs/`);
      }
    
      get(id) {
        return http.get(`api/externalorgs/${id}`);
      }
    
      create(data) {
        return http.post("api/externalorgs", data);
      }
    
      update(id, data) {
        return http.put(`api/externalorgs/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`api/externalorgs/${id}`);
      }
}

export default new ExternalOrgsService();
