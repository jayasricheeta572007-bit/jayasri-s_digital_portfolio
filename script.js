<script>
    // Theme and Layout Styling using JavaScript
    document.body.style.margin = "0";
padding: "15px",
        borderRadius: "8px",
        flex: "1 1 250px"
      });
    });

    // Footer Styling
    const footer = document.querySelector("footer");
    Object.assign(footer.style, {
      backgroundColor: "#112240",
      textAlign: "center",
      padding: "15px"
    });

    // Media Query Function using JS
    function applyResponsive() {
      if (window.innerWidth <= 768) {
        nav.style.flexDirection = "column";
        nav.style.alignItems = "center";
       3 projectList.style.flexDirection = "column";
      } else {
        nav.style.flexDirection = "row";
        projectList.style.flexDirection = "row";
      }
    }

    window.addEventListener("resize", applyResponsive);
    applyResponsive();
  </script>