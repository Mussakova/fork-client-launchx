import http from "../http-common";

class MissionService{
    getAllMission() {
        return http.get("/missionCommanderList");
      }
      getMission(id) {
        return http.get(`/missionCommander/${id}`);
      }
      createMission(data) {
        return http.post("/missionCommander", data);
      }
      updateMission(id, data) {
        return http.put(`/missionCommander/${id}`, data);
      }
      deleteMission(id) {
        return http.delete(`/missionCommander/${id}`);
      }
}

export default new MissionService();