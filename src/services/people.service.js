
import http from '../common/http-common'


class PeopleDataService
{
    getAll() {
        return http.get(`api/people/`);
      }
    
      get(id) {
        return http.get(`api/people/${id}`);
      }
    
      create(data) {
        return http.post("api/people", data);
      }
    
      update(id, data) {
        return http.put(`api/people/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`api/people/${id}`);
      }
}

export default new PeopleDataService();
