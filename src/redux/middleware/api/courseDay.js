export async function getCourseDay(course_id) {
   let data = course_id;

   var myHeaders = new Headers();
   myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWE0ODA2ODEzZGM1MjFmZjM2NDY0YiIsImlhdCI6MTU5NjYyMjc2MX0.SiX1aDXkycJNrQOSfIfPlckK9ZvLZs77-p4re7kAjjg',
   );

   var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
   };
   let linkAPI = 'http://118.69.123.51:5000/fis/api/edu/get_class_by_course?courseId=' + data;
   const response = (await fetch(linkAPI, requestOptions)).json();

   return response;
}
