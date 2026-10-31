// ==========================================
        // ==========================================
        // CUSTOM WELCOME MODAL LOGIC
        // ==========================================
        const modalOverlay = document.getElementById("welcome-modal");
        const modalCloseBtn = document.getElementById("modal-close-btn");

        // Close modal when the "Close" button is clicked
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener("click", function() {
                modalOverlay.style.display = "none";
            });
        }

        // Optional: Also allow closing the modal if the user clicks anywhere on the dark backdrop overlay outside the box
        if (modalOverlay) {
            modalOverlay.addEventListener("click", function(event) {
                if (event.target === modalOverlay) {
                    modalOverlay.style.display = "none";
                }
            });
        }
        // ==========================================
        // 2. PERSIST DARK MODE PREFERENCE VIA LOCALSTORAGE
        // ==========================================
        const darkModeToggle = document.getElementById("dark-mode-toggle");

        // Check localStorage on initial page load
        const savedTheme = localStorage.getItem("darkModePreference");
        if (savedTheme === "enabled") {
            document.body.classList.add("dark-mode");
            darkModeToggle.checked = true; // Sync checkbox state with saved preference
        }

        // Listen for user interaction on the toggle switch
        darkModeToggle.addEventListener("change", function() {
            if (darkModeToggle.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkModePreference", "enabled"); // Save preference
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkModePreference", "disabled"); // Save preference
            }
        });

        // ==========================================
        // 3. SKILLS LOOP & DYNAMIC CONTENT
        // ==========================================
        const skillsArray = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
        const skillsListElement = document.getElementById("skills-list");
        
        skillsArray.forEach(function(skill) {
            let listItem = document.createElement("li");
            listItem.textContent = skill;
            skillsListElement.appendChild(listItem);
        });