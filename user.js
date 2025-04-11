const arr = [
    {
      username: "john_doe",
      age: 28,
      skills: ["JavaScript", "React", "Node.js"],
      designations: ["Frontend Developer", "Web Developer"],
      images: "https://randomuser.me/api/portraits/men/1.jpg",
      istatus: 'Stranger'
    },
    {
      username: "jane_smith",
      age: 34,
      skills: ["Python", "Machine Learning", "Data Analysis"],
      designations: ["Data Scientist", "ML Engineer"],
      images: "https://randomuser.me/api/portraits/women/2.jpg",
      istatus: 'Stranger'
    },
    {
      username: "alex_miller",
      age: 25,
      skills: ["Java", "Spring Boot", "SQL"],
      designations: ["Backend Developer", "Software Engineer"],
      images: "https://randomuser.me/api/portraits/men/3.jpg",
      istatus: 'Stranger'
    },
    {
      username: "emma_jones",
      age: 30,
      skills: ["HTML", "CSS", "UI/UX Design"],
      designations: ["UI Designer", "Frontend Developer"],
      images: "https://randomuser.me/api/portraits/women/4.jpg",
      istatus: 'Stranger'
    },
    {
      username: "mike_williams",
      age: 27,
      skills: ["PHP", "Laravel", "MySQL"],
      designations: ["Web Developer", "Full Stack Developer"],
      images: "https://randomuser.me/api/portraits/men/5.jpg",
      istatus: 'Stranger'
    },
    {
      username: "lily_brown",
      age: 32,
      skills: ["C#", ".NET", "SQL Server"],
      designations: ["Software Developer", "Backend Developer"],
      images: "https://randomuser.me/api/portraits/women/6.jpg",
      istatus: 'Stranger'
    },
    {
      username: "oliver_davis",
      age: 29,
      skills: ["Swift", "iOS Development", "Objective-C"],
      designations: ["iOS Developer", "Mobile Developer"],
      images: "https://randomuser.me/api/portraits/men/7.jpg",
      istatus: 'Stranger'
    },
    {
      username: "ava_jackson",
      age: 24,
      skills: ["JavaScript", "Vue.js", "HTML5"],
      designations: ["Frontend Developer", "Web Developer"],
      images: "https://randomuser.me/api/portraits/women/8.jpg",
      istatus: 'Stranger'
    },
    {
      username: "sophia_martinez",
      age: 35,
      skills: ["Ruby", "Rails", "PostgreSQL"],
      designations: ["Full Stack Developer", "Web Developer"],
      images: "https://randomuser.me/api/portraits/women/9.jpg",
      istatus: 'Stranger'
    },
    {
      username: "liam_rodriguez",
      age: 26,
      skills: ["Java", "Android Development", "Kotlin"],
      designations: ["Android Developer", "Mobile Developer"],
      images: "https://randomuser.me/api/portraits/men/10.jpg",
      istatus: 'Stranger'
    },
    {
      username: "benjamin_lee",
      age: 33,
      skills: ["Go", "Microservices", "Docker"],
      designations: ["Backend Developer", "DevOps Engineer"],
      images: "https://randomuser.me/api/portraits/men/11.jpg",
      istatus: 'Stranger'
    },
    {
      username: "isabella_wilson",
      age: 31,
      skills: ["JavaScript", "Angular", "TypeScript"],
      designations: ["Frontend Developer", "Web Developer"],
      images: "https://randomuser.me/api/portraits/women/12.jpg",
      istatus: 'Stranger'
    },
    {
      username: "ethan_moore",
      age: 29,
      skills: ["Python", "Django", "Flask"],
      designations: ["Backend Developer", "Web Developer"],
      images: "https://randomuser.me/api/portraits/men/13.jpg",
      istatus: 'Stranger'
    },
    {
      username: "mia_taylor",
      age: 27,
      skills: ["Java", "Spring", "Hibernate"],
      designations: ["Backend Developer", "Software Engineer"],
      images: "https://randomuser.me/api/portraits/women/14.jpg",
      istatus: 'Stranger'
    },
    {
      username: "noah_anderson",
      age: 34,
      skills: ["Ruby", "Rails", "JavaScript"],
      designations: ["Full Stack Developer", "Web Developer"],
      images: "https://randomuser.me/api/portraits/men/15.jpg",
      istatus: 'Stranger'
    },
]
var main = document.querySelector('#main')

function khuFunction(){
    var sum =' '

    arr.forEach(function(chacha,idx){
        sum = sum + `<div class="card">
            <img src="${chacha.images}" alt="">
            <h1>${chacha.username}</h1>
            <h4>${chacha.age}</h4>
            <h3>${chacha.designations}</h3>
            <h4>${chacha.skills}</h4>
            <h5>${chacha.istatus}</h5>
            <button id=${idx}>Add Friend</button>
        </div>`
    })
    main.innerHTML = sum

}
khuFunction()

main.addEventListener('click',function(dets){
    var star = arr[dets.target.id]
    if(star.istatus == 'Stranger'){
        star.istatus = 'Friend'
    }else{
        star.istatus = 'Stranger'
    }
    khuFunction()
    

})