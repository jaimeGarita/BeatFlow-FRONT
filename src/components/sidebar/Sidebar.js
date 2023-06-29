export default {
  data() {
    return {
      isCollapsed: false, // Define si el sidebar está colapsado o no
      activeMenuItem: "", // Define el ítem activo actual del menú
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed; // Invierte el estado de colapso del sidebar
    },
  },
};
