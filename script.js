
// Required variables //

const mainButtons = document.querySelectorAll(".main-btn");

const modalContainer = document.getElementById("modal");

const close = document.getElementById('close-icon');
const exitModal = document.querySelectorAll('.exit-modal');

const choiceModal = document.getElementById('first-modal');
const successModal = document.getElementById('success');



const rewardSelection = document.querySelectorAll('.reward-selection');

const pledgeForm = document.querySelectorAll('.pledge-form');


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

let bambooInput = document.getElementById('amount-pledge1');

let blackInput = document.getElementById('amount-pledge2');

const mobileMenu = document.getElementById('mobile-modal');

// hamburger menu //

const hamburger = document.getElementById('hamburger-btn');

const closeHamburger = document.getElementById('hamburger-close');

hamburger.addEventListener('click', function toggleHamburger () {

closeHamburger.style.display = 'block';
hamburger.style.display = 'none';
choiceModal.style.display = 'none';
modalContainer.classList.add('openModal');
mobileMenu.classList.add('mobile-toggle');

})

closeHamburger.addEventListener('click', function closeMenu () {

    closeHamburger.style.display = 'none';
    hamburger.style.display = 'block';
    modalContainer.classList.remove('openModal');
    mobileMenu.classList.remove('mobile-toggle');


})


// Opens Modal //

function openMenu () {

    mobileMenu.classList.remove('mobile-toggle');
    modalContainer.classList.add('openModal');
}



// resets form / modals when closed //


function closeModal () {

    modalContainer.classList.remove('openModal');
    choiceModal.style.display = 'block';
    successModal.style.display = 'none';

    radioInput.forEach((input) => {

        input.checked = false;
        bambooInput.value = '25';
        blackInput.value = '75';
        document.getElementById('amount-pledge0').value = '10';
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


// bookmark btn //

const bookmarkText = document.querySelector('#bookmark p');

document.getElementById('bookmark').addEventListener("click", () => {
    bookmark.classList.toggle("active");
    if (bookmark.classList.contains("active")) {
        bookmarkText.innerHTML = "Bookmarked";
    } else {
        bookmarkText.innerHTML = "Bookmark";
    };
});



// Radio selection //




function showSelectedPledge() {



    if (bambooSelection.checked === true) {

        bambooContainer.style.border = '2px solid hsl(176, 50%, 47%)';
        bambooPledge.style.display = 'flex';

    } else if (!bambooSelection.checked === true) {

        bambooContainer.style.border = 'none';
        bambooPledge.style.display = 'none';

    }

    if (blackSelection.checked === true) {

        blackContainer.style.border = '2px solid hsl(176, 50%, 47%)'
        blackPledge.style.display = 'flex'

    } else if (!blackSelection.checked === true) {

        blackContainer.style.border = 'none';
        blackPledge.style.display = 'none';


    }

    if (noPledgeSelection.checked === true) {

        freeContainer.classList.add('style-change');
        noPledge.classList.add('display-change');



    } else if (!noPledgeSelection.checked === true) {



        freeContainer.classList.remove('style-change');
        noPledge.classList.remove('display-change');



    }
    


}

// switches between radio choices //

radioInput.forEach((input) => {


    input.addEventListener("change", showSelectedPledge);
})





// closes modal/menu when clicking outside //

modalContainer.addEventListener('click', (e) => {


    if (e.target !== e.currentTarget) {

        return;
    } else {

        closeHamburger.style.display = 'none';
    hamburger.style.display = 'block';
        closeModal();
    }

})

// opens modal with main buttons

mainButtons.forEach((b) => {

    
    b.addEventListener('click', openMenu); 



    })




    // closes modal when clicking close buttons //


    exitModal.forEach((em) => {


        em.addEventListener('click', closeModal);
    
    })


    // removes selection modal and displays thank you modal

function formSuccess() {

    choiceModal.style.display = 'none';
    successModal.style.display = 'block';
}



// pledge variables

const goalAmount = 100000;
let totalBackers = 5007;
let totalBacked = 89914;



// updates pledge totals //

function updateAmountPledged (form) {


    

        // adds 1 to total backers after every submission
        totalBackers++;
        document.getElementById('total-backers').innerHTML = totalBackers.toLocaleString();

        // adds amount inputted to total amount backed
        const amountPledged = parseInt(
        document.getElementById(`amount-${form.dataset.group}`).value);
        totalBacked += amountPledged;
        document.getElementById("total-backed").innerHTML = `$${totalBacked.toLocaleString()}`;

        // updates slider with new percentage backed
        const percentageBacked = Math.floor((totalBacked / goalAmount) * 100);
        document.querySelector(".slider__progress-inner").style.width = `${percentageBacked}%`;
       

}

    // updates remaining items bamboo/black etc //

         function updateRewards(form) {

            let rewardsRemaining = parseInt(document.querySelector(`.remaining-${form.dataset.group}`).innerHTML);

            // if any rewards left subtracts 1 from remaining rewards //

            if (rewardsRemaining > 0) {

                rewardsRemaining--;

                document.querySelectorAll(`.remaining-${form.dataset.group}`).forEach((item) => {

                    item.innerHTML = rewardsRemaining;
                })
            }

     }



    //event listeners for submitting form and updating values

    pledgeForm.forEach((form) => {
        form.addEventListener("submit", (e) => {
          e.preventDefault();

          formSuccess();

          updateAmountPledged(form);

          // if a reward is chosen updates rewards remaining //

          if (form.dataset.group != "noReward") {

            updateRewards(form);
          }


        })

    });



