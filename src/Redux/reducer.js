const initialState = {
  categories: [
    {
      id: "cspm_dashboard",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "widget_1",
          name: "Cloud Accounts",
          text: "Connected (2), Not Connected (2)",
        },
        {
          id: "widget_2",
          name: "Cloud Account Risk Assessment",
          text: "Failed (1089), Warning (63), Passed (7754)",
        },
      ],
    },
    {
      id: "cwpp_dashboard",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "widget_1",
          name: "Top 5 Namespace Specific Alerts",
          text: "No Graph data available",
        },
        {
          id: "widget_2",
          name: "Workload Alerts",
          text: "No Graph data available",
        },
      ],
    },
    {
      id: "registry_scan",
      name: "Registry Scan",
      widgets: [
        {
          id: "widget_1",
          name: "Image Risk Assessment",
          text: "1470 Total Vulnerabilities - Critical (3), High (60), Medium (500), Low (907)",
        },
        {
          id: "widget_2",
          name: "Image Security Issues",
          text: "2 total images - Critical (2), High (0)",
        },
      ],
    },
  ],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_WIDGET":
    case "REMOVE_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    default:
      return state;
  }
}
