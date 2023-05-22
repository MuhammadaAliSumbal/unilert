const jobsContainer = document.getElementById('jobs-container');
const searchForm = document.getElementById('search-form');

const jobs = [  {    title: 'Web Developer',    location: 'New York, NY',    description: 'We are seeking a skilled web developer to join our team.',    requirements: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    jobType: 'full-time',
    applyLink: 'https://www.example.com/apply'
  },
  {
    title: 'Graphic Designer',
    location: 'Los Angeles, CA',
    description: 'We are looking for a talented graphic designer to create beautiful designs.',
    requirements: ['Photoshop', 'Illustrator', 'InDesign'],
    jobType: 'part-time',
    applyLink: 'https://www.example.com/apply'
  },
  {
    title: 'Marketing Manager',
    location: 'Chicago, IL',
    description: 'We need a creative marketing manager to lead our team.',
    requirements: ['Marketing', 'Sales', 'Social Media'],
    jobType: 'internship',
    applyLink: 'https://www.example.com/apply'
  },
  {
    title: 'Data Analyst',
    location: 'San Francisco, CA',
    description: 'We are seeking a data analyst to help us make data-driven decisions.',
    requirements: ['Data Analysis', 'Statistics', 'SQL'],
    jobType: 'entry-level',
    applyLink: 'https://www.example.com/apply'
  },
  {
    title: 'UI/UX Designer',
    location: 'Seattle, WA',
    description: 'We need a talented UI/UX designer to create beautiful and user-friendly interfaces.',
    requirements: ['UI Design', 'UX Design', 'Wireframing', 'Prototyping'],
    jobType: 'full-time',
    applyLink: 'https://www.example.com/apply'
  }
];

function displayJobs(jobs) {
  jobsContainer.innerHTML = '';
  jobs.forEach(job => {
    const jobEl = document.createElement('div');
    jobEl.classList.add('job');
    jobEl.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Description:</strong> ${job.description}</p>
      <p><strong>Requirements:</strong> ${job.requirements.join(', ')}</p>
      <p><strong>Job Type:</strong> ${job.jobType === 'internship' ? '<i class="fas fa-graduation-cap"></i> Internship' : job.jobType === 'entry-level' ? '<i class="fas fa-user-graduate"></i> Entry-Level' : job.jobType === 'full-time' ? '<i class="fas fa-briefcase"></i> Full-Time' : '<i class="fas fa-clock"></i> Part-Time'}</p>
      <button><a href="${job.applyLink}" target="_blank">Apply Now</a></button>
    `;
    jobsContainer.appendChild(jobEl);
  });
}

displayJobs(jobs);

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = searchForm.querySelector('input').value.toLowerCase();
  const filteredJobs = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm) ||
      job.description.toLowerCase().includes(searchTerm) ||
      job.requirements.join(' ').toLowerCase().includes(searchTerm) ||
      job.jobType.toLowerCase().includes(searchTerm)
    );
  });
  displayJobs(filteredJobs);
});

function displayJobs(jobs) {
  jobsContainer.innerHTML = '';
  jobs.forEach(job => {
    const jobEl = document.createElement('div');
    jobEl.classList.add('job');
    const jobTypeIcon = job.type === 'Full-time' ? 'fa-briefcase' : 'fa-clock';
    const jobTypeText = job.type === 'Full-time' ? 'Full-time' : 'Part-time';
    const jobLevelIcon = job.level === 'Internship' ? 'fa-graduation-cap' : 'fa-briefcase';
    const jobLevelText = job.level === 'Internship' ? 'Internship' : 'Entry-level';
    jobEl.innerHTML = `
      <h3>${job.title}</h3>
      <p><i class="fas ${jobTypeIcon}"></i> ${jobTypeText} | <i class="fas ${jobLevelIcon}"></i> ${jobLevelText}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Description:</strong> ${job.description}</p>
      <p><strong>Requirements:</strong> ${job.requirements.join(', ')}</p>
      <button><a href="${job.applyLink}" target="_blank">Apply Now</a></button>
    `;
    jobsContainer.appendChild(jobEl);
  });
}
