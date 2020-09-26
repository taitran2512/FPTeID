export async function postCourse(courseName, trainer, startedDate, endedDate, buildingId, roomId) {
   let data = {
      courseName: courseName,
      trainer: trainer,
      startedDate: startedDate,
      endedDate: endedDate,
      buildingId: buildingId,
      roomId: roomId,
   };
   var myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');
   myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWE0ODA2ODEzZGM1MjFmZjM2NDY0YiIsImlhdCI6MTU5NjYyMjc2MX0.SiX1aDXkycJNrQOSfIfPlckK9ZvLZs77-p4re7kAjjg',
   );
   var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
   };
   console.log('json data', JSON.stringify(data));
   const response = (
      await fetch('http://118.69.123.51:5000/fis/api/edu/create_new_course', requestOptions)
   ).json();
   return response;
}
