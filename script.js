document.getElementById('show-all').addEventListener('click', () => {
    document.getElementById('pdr2').classList.toggle('hidden');
    document.getElementById('pdr2').classList.contains('hidden') ?
    document.getElementById('show-all-p').innerText = 'Show All' :
    document.getElementById('show-all-p').innerText = 'Show Less';
})
