
import http from '../common/http-common'


class OutcomeProgramDataService
{
    getAll() {
        return http.get(`api/outcomeprogrammapping/`);
      }
    
      get(id) {
        return http.get(`api/outcomeprogrammapping/${id}`);
      }
    
      create(data) {
        return http.post("api/outcomeprogrammapping", data);
      }
    
      update(id, data) {
        return http.put(`api/outcomeprogrammapping/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`api/outcomeprogrammapping/${id}`);
      }
}

export default new OutcomeProgramDataService();
