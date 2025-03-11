const daysContainer = document.getElementById("days");
    const monthYear = document.getElementById("monthYear");
    const events = {
      "2025-03-15": "Evento de leitura",
      "2025-03-20": "Lançamento de livro",
    };

    let currentDate = new Date();

    function renderCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      monthYear.innerText = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(currentDate);

      daysContainer.innerHTML = "";

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div></div>`;
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isEvent = events[date];
        daysContainer.innerHTML += `<div class="day ${isEvent ? 'event' : ''}" title="${isEvent || ''}">${day}</div>`;
      }
    }

    function prevMonth() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    }

    function nextMonth() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    }

    renderCalendar();
 