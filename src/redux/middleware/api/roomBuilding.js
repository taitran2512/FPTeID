export async function get_RoomBuilding() {
   var myHeaders = new Headers();
   myHeaders.append(
      'Authorization',
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWE0ODA2ODEzZGM1MjFmZjM2NDY0YiIsImlhdCI6MTU5NTgzNDAwMH0.MhDx8nGkotiOeJPLRHuY3GMJYzaC6PrjcHQPfA2fadk',
   );

   var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
   };
   return (
      await fetch(
         'http://118.69.123.51:5000/fis/api/edu/get_building',
         requestOptions,
      )
   ).json();
}
