
        let speech = new SpeechSynthesisUtterance();
        let synth = window.speechSynthesis; // Store the speech synthesis object

        let voices = [];
        let voiceSelect = document.querySelector("select");

        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            speech.voice = voices[0];

            voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
        };

        voiceSelect.addEventListener("change", () => {
            speech.voice = voices[voiceSelect.value];
        });

        // Start speaking
        document.querySelector("#play-button").addEventListener("click", () => {
            speech.text = document.querySelector("textarea").value;
            synth.speak(speech);
        });

        // Pause speech
        document.querySelector("#pause-button").addEventListener("click", () => {
            if (synth.paused) {
                // Resume if already paused
                synth.resume();
            } else {
                // Pause speech if it's not paused
                synth.pause();
            }
        });
    