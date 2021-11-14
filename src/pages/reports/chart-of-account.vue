<template>
  <f7-page>
    <f7-navbar back-link="Back" title="Chart Of Accounts"></f7-navbar>
    <f7-block
      strong
      class="no-padding-horizontal no-margin-horizontal no-margin-top"
    >
      <f7-treeview>
        <f7-treeview-item opened="true" label="Assets">
          <f7-treeview-item opened="true" label="Current Assets (Dr. 1234567)">
            <f7-treeview-item
              opened="true"
              link="#"
              label="Cash in Hand (Dr. 1234567)"
            >
              <f7-treeview-item opened="true" link="#" label="Main Cash">
                <template #content-start>
                  <f7-chip text="Dr. 2,657,873.00"></f7-chip>
                </template>
              </f7-treeview-item>
              <f7-treeview-item opened="true" link="#" label="Counter 1">
                <template #content-start>
                  <f7-chip text="Dr. 2,657,873.00"></f7-chip>
                </template>
              </f7-treeview-item>
            </f7-treeview-item>
            <f7-treeview-item opened="true" link="#" label="Cash Counter-1">
              <template #content-start>
                <f7-chip text="Dr. 55000"></f7-chip>
              </template>
            </f7-treeview-item>
          </f7-treeview-item>
          <f7-treeview-item opened="true" label="Fixed Assets (Dr. 1234567)">
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 1">
              <template #content-start>
                <f7-chip text="Dr. 33000"></f7-chip>
              </template>
            </f7-treeview-item>
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 2">
              <template #content-start>
                <f7-chip text="Cr. 40000"></f7-chip>
              </template>
            </f7-treeview-item>
          </f7-treeview-item>
          <f7-treeview-item opened="true" label="Investment (Dr. 1234567)">
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 1">
              <template #content-start>
                <f7-chip text="Dr. 33000"></f7-chip>
              </template>
            </f7-treeview-item>
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 2">
              <template #content-start>
                <f7-chip text="Cr. 40000"></f7-chip>
              </template>
            </f7-treeview-item>
          </f7-treeview-item>
          <f7-treeview-item
            opened="true"
            label="Temporary Account (Dr. 1234567)"
          >
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 1">
              <template #content-start>
                <f7-chip text="Dr. 33000"></f7-chip>
              </template>
            </f7-treeview-item>
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 2">
              <template #content-start>
                <f7-chip text="Cr. 40000"></f7-chip>
              </template>
            </f7-treeview-item>
          </f7-treeview-item>
        </f7-treeview-item>

        <f7-treeview-item opened="true" label="Liabilities">
          <f7-treeview-item opened="true" label="Sub Item 1">
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 111">
              <template #content-end>
                <f7-chip text="Dr. 41000"></f7-chip>
              </template>
            </f7-treeview-item>
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 2">
              <template #content-end>
                <f7-chip text="Cr. 42000"></f7-chip>
              </template>
            </f7-treeview-item>
          </f7-treeview-item>
          <f7-treeview-item opened="true" label="Sub Item 2">
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 1">
              <template #content-start>
                <f7-chip text="Dr. 43000"></f7-chip>
              </template>
            </f7-treeview-item>
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 2">
              <template #content-start>
                <f7-chip text="Cr. 55000"></f7-chip>
              </template>
            </f7-treeview-item>
          </f7-treeview-item>
        </f7-treeview-item>

        <f7-treeview-item opened="true" label="Expense">
          <f7-treeview-item opened="true" label="Sub Item 1">
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 1">
              <template #content-end>
                <f7-chip text="Dr. 45000"></f7-chip>
              </template>
            </f7-treeview-item>
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 2">
              <template #content-end>
                <f7-chip text="Cr. 46000"></f7-chip>
              </template>
            </f7-treeview-item>
          </f7-treeview-item>
          <f7-treeview-item opened="true" label="Sub Item 2">
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 1">
              <template #content-start>
                <f7-chip text="Dr. 47000"></f7-chip>
              </template>
            </f7-treeview-item>
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 2">
              <template #content-start>
                <f7-chip text="Cr. 55000"></f7-chip>
              </template>
            </f7-treeview-item>
          </f7-treeview-item>
        </f7-treeview-item>

        <f7-treeview-item opened="true" label="Income">
          <f7-treeview-item opened="true" label="Sub Item 1">
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 1">
              <template #content-end>
                <f7-chip text="Dr. 45000"></f7-chip>
              </template>
            </f7-treeview-item>
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 2">
              <template #content-end>
                <f7-chip text="Cr. 46000"></f7-chip>
              </template>
            </f7-treeview-item>
          </f7-treeview-item>
          <f7-treeview-item opened="true" label="Sub Item 2">
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 1">
              <template #content-start>
                <f7-chip text="Dr. 47000"></f7-chip>
              </template>
            </f7-treeview-item>
            <f7-treeview-item opened="true" link="#" label="Sub Sub Item 2">
              <template #content-start>
                <f7-chip text="Cr. 55000"></f7-chip>
              </template>
            </f7-treeview-item>
          </f7-treeview-item>
        </f7-treeview-item>
      </f7-treeview>
      <small class="margin-left">Note: Parent categories</small>
    </f7-block>
  </f7-page>
</template>
