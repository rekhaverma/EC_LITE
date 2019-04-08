export const markup = function(tableConfig) {
    let tableConfigExist = Object.entries(tableConfig).length === 0 && tableConfig.constructor === Object
    if(!tableConfigExist) {
      return `
        <div class="userDetails">
          <h1 style="margin-bottom: 19px;">User Details:</h1>
          <p class="fields">AppMemberId: <span>${tableConfig.appMemberId || 'N/A'}</span></p>
          <p class="fields">ClientMemberId: <span>${tableConfig.clientMemId || 'N/A'}</span></p>
          <p class="fields">Email: <span>${tableConfig.email || 'N/A'}</span></p>
          <p class="fields">First Name:<span>${tableConfig.first_name || 'N/A'}</span></p>
          <p class="fields">Last Name: <span>${tableConfig.last_name || 'N/A'}</span></p>
          <p class="fields">Phone: <span>${tableConfig.phone || 'N/A'}</span></p>
          <div"><a id="send-details" class="send-button">Add Member</a></div>
          <div id="result-div"></div>
        </div>
      `
    }
  };
  
 export const settingsMarkup = function(tableConfig) {
    return `
    <div class="userDetails">
      <h1 style="margin-bottom: 19px;">User Settings:</h1>
      <p class="fields">AppMemberId: <span>${tableConfig.appMemberId || 'N/A'}</span></p>
      <p class="fields">ClientMemberId: <span>${tableConfig.appClientId || 'N/A'}</span></p>
      <p class="fields">Email: <span>${tableConfig.email || 'N/A'}</span></p>
      <p class="fields">First Name:<span>${tableConfig.firstName || 'N/A'}</span></p>
      <p class="fields">Last Name: <span>${tableConfig.lastName || 'N/A'}</span></p>
      <p class="fields">Phone: <span>${tableConfig.phone || 'N/A'}</span></p>
      <div id="result-div"></div>
    </div>
    `
  };
  export const formWizard = function() {
    return `
        <form id="regForm">
        <!-- One "tab" for each step in the form: -->
        <div class="tab">
          <p>Please select first name:</p>
          <p><input placeholder="First name..." oninput="this.className = ''" name="fname" readonly></p>
        </div>
        <div class="tab">
          <p>Please select last name</p>
          <p><input placeholder="Last name..." oninput="this.className = ''" name="lname" readonly></p>
        </div>
        <div class="tab">
          <p>Please select Email</p>
          <p><input placeholder="Email..." oninput="this.className = ''" name="email" readonly></p>
        </div>
        <div class="tab">
          <p>Please select mobile</p>
          <p><input placeholder="Mobile..." oninput="this.className = ''" name="mobile" readonly></p>
        </div>
        <div class="tab">
          <p>Please select AppMemberId</p>
          <p><input placeholder="AppMemberId..." oninput="this.className = ''" name="AppMemberId" readonly></p>
        </div>
        <div class="tab">
          <p>Please select ClientMemberId</p>
          <p><input placeholder="ClientMemberId..." oninput="this.className = ''" name="ClientMemberId" readonly></p>
        </div>
        <div style="overflow:auto;">
          <div style="float:right;margin: 15px;">
            <button type="button" id="prevBtn" class="goToStep">Previous</button>
            <button type="button" id="nextBtn" class="goToStep">Next</button>
          </div>
        </div>
        <!-- Circles which indicates the steps of the form: -->
        <div id="steps" style="text-align:center;margin-top:40px;">
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
        </div>
      </form>
    `;
  }
  export const welcomeForm = () => (
    `
    <div class="welcomeForm">
      <div>Welcome to EC lite!</div>
      <div>Click start for onboarding process</div>
      <a id="startOnboarding">Start</a>
    </div>
    `
  );