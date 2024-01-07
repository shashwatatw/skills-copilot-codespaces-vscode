function skillsMember() {
    const skills = document.getElementById('skills');
    const skillsMember = document.getElementById('skillsMember');
    const closeSkills = document.getElementById('closeSkills');
    const member = document.getElementById('member');
    const closeMember = document.getElementById('closeMember');

    skills.addEventListener('click', function () {
        skillsMember.classList.add('open');
        member.classList.add('close');
        closeSkills.classList.add('open');
    })

    closeSkills.addEventListener('click', function () {
        skillsMember.classList.remove('open');
        member.classList.remove('close');
        closeSkills.classList.remove('open');
    })
}