export const Tabs = ({ tabs, activeTabId, onTableSelected, activeTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={activeTabId === tab.id ? 'is-active' : ''}
          >
            <a
              onClick={e => {
                e.preventDefault();
                if (tab.id !== activeTabId) {
                  onTableSelected(tab.id);
                }
              }}
              href={tab.id}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {activeTab.content}
    </div>
  </div>
);
