const names = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

/*
function Profile(names)
	{
		let index=0;
		return{
					next:function()
						{
							if(index<names.length)
							{
									return{
										value:names[index++],
										done:false
									}
							}
							else
							{
								return
								{
									done:true
								}
							}
						}
		}
	}
*/


function Profile(names)
	{
		let index=0;
		
		return{
						next:function()
							{
								return index<names.length ? {value:names[index++],done:false}:{done:true}									}
					}
	}
	
let pro=new Profile(names)
nextCV();

let next=document.getElementById('next')
next.addEventListener("click",nextCV)

function nextCV()
	{
		const currentCandidate=pro.next().value

		let image=document.getElementById('image')
		let bio=document.getElementById('bio')

		if(currentCandidate!=undefined)
		{
			image.innerHTML=`<img src="${currentCandidate.image}">`

		bio.innerHTML=`
				
	<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>
									`
		}

		else{
			alert('end of Application')
			window.location.reload()
		}
		
	}

