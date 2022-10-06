
// Required variables //

const mainButtons = document.querySelectorAll(".main-btn");

const modalContainer = document.getElementById("modal");

const close = document.getElementById('close-icon');
const exitModal = document.querySelectorAll('.exit-modal');

const choiceModal = document.getElementById('first-modal');
const successModal = document.getElementById('success');

const continueBtn = document.querySelectorAll('.continue-btn')


const rewardSelection = document.querySelectorAll('.reward-selection');



const radioInput = document.querySelectorAll('.radio');

const noPledgeSelection = document.getElementById('noReward');
const bambooSelection = document.getElementById('25Reward');
const blackSelection = document.getElementById('75Reward');

const bambooPledge = document.getElementById('bamboo-pledge')
const noPledge = document.getElementById('no-pledge');
const blackPledge = document.getElementById('black-pledge');

const freeContainer = document.getElementById('free-container');
const bambooContainer = document.getElementById('bamboo-container');
const blackContainer = document.getElementById('black-container');




// Functions //

// Opens Modal //

function openMenu () {


    modalContainer.classList.add('openModal');
}


// confirms pledge //



// resets form / modals when closed //


function closeModal () {

    modalContainer.classList.remove('openModal');
    choiceModal.style.display = 'block';
    successModal.style.display = 'none';

    radioInput.forEach((input) => {

        input.checked = false;
        bambooInput.value = '';
        blackInput.value = '';
        resetError();

    })

    showSelectedPledge();


}

// opens pledge modal and checks selected choice //

document.getElementById('bamboo-btn').addEventListener('click', function openBamboo () {

    openMenu();
    bambooContainer.style.border = '2px solid hsl(176, 50%, 47%)';
    bambooSelection.checked = true;
    bambooPledge.style.display = 'flex';


})



document.getElementById('black-btn').addEventListener('click', function openBlack () {

    openMenu();
    blackContainer.style.border = '2px solid hsl(176, 50%, 47%)';
    blackSelection.checked = true;
    blackPledge.style.display = 'flex'



})

// Radio selection //


function showSelectedPledge() {



    if (bambooSelection.checked === true) {

        bambooContainer.style.border = '2px solid hsl(176, 50%, 47%)';
        bambooPledge.style.display = 'flex';

    } else if (!bambooSelection.checked === true) {

        bambooContainer.style.border = 'none';
        bambooPledge.style.display = 'none';
        resetError();

    }

    if (blackSelection.checked === true) {

        blackContainer.style.border = '2px solid hsl(176, 50%, 47%)'
        blackPledge.style.display = 'flex'

    } else if (!blackSelection.checked === true) {

        blackContainer.style.border = 'none';
        blackPledge.style.display = 'none';
        resetError();


    }

    if (noPledgeSelection.checked === true) {

        freeContainer.classList.add('style-change');
        noPledge.classList.add('display-change');

        // freeContainer.style.border = '2px solid hsl(176, 50%, 47%)'
        // noPledge.style.display = 'flex'

    } else if (!noPledgeSelection.checked === true) {

        // freeContainer.style.border = 'none';
        // noPledge.style.display = 'none';

        freeContainer.classList.remove('style-change');
        noPledge.classList.remove('display-change');
        resetError();



    }
    


}

// switches between radio choices //

radioInput.forEach((input) => {


    input.addEventListener("change", showSelectedPledge);
})





// closes modal when clicking outside //

modalContainer.addEventListener('click', (e) => {


    if (e.target !== e.currentTarget) {

        return;
    } else {

        

        closeModal();
    }

})


// continues after adding pledge amount //

// continueBtn.forEach((cb) => {

//     cb.addEventListener('click', addPledge)

// })

// opens modal with main buttons //

mainButtons.forEach((b) => {

    
    b.addEventListener('click', openMenu); 



    })




    // closes modal when clicking close buttons //


    exitModal.forEach((em) => {


        em.addEventListener('click', closeModal);
    
    })




    // form validation //

    
    let bambooInput = document.getElementById('pledge1');

    let blackInput = document.getElementById('pledge2');

    let bambooError = document.getElementById('bamboo-error');

    function validateForm (e) {

        e.preventDefault();

            if (bambooInput.value === 'null' || bambooInput.value === '' || bambooInput.value === '0' || isNaN(bambooInput.value) ) {

                bambooInput.classList.add('error-outline');

            } else {

                advanceForm();
            }


            if (blackInput.value === 'null' || blackInput.value === '' || blackInput.value === '0' || isNaN(blackInput.value)) {

                blackInput.classList.add('error-outline');


            } else {

                advanceForm();
            }

    }


    // submits pledge when form is complete //
    
    continueBtn.forEach((cb) => {

        cb.addEventListener('click', validateForm);

    })


    // advances to completion modal when form is complete //

    function advanceForm () {

    choiceModal.style.display = 'none';
    successModal.style.display = 'block';


}

// resets error msg's //

function resetError() {

    bambooInput.classList.remove('error-outline');
    blackInput.classList.remove('error-outline');

}