
import http from '../common/http-common'


class OutcomePeopleDataService
{
    getAll() {
        return http.get(`api/outcomepeoplemapping/`);
      }
    
      get(id) {
        return http.get(`api/outcomepeoplemapping/${id}`);
      }
    
      create(data) {
        return http.post("api/outcomepeoplemapping", data);
      }
    
      update(id, data) {
        return http.put(`api/outcomepeoplemapping/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`api/outcomepeoplemapping/${id}`);
      }
}

export default new OutcomePeopleDataService();
