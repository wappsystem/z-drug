(function(){
    var modules={
        "panel-main":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child":              {url:"$H/m/panel-child.html"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"participant-z-drug",form_module:"participant-form",router:1,
                                                child_panel:"panel-child",
                                                questionnaire_setup:"online-questionnaire-setup",
                                                online_questionnaire:"online-questionnaire-app",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                                                participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB"
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"participant-z-drug"},

        "online-questionnaire-setup":       {url:"$H/m/oq-setup.html",Table:"participant-z-drug"},
        "online-questionnaire-app":         {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"notes-z-drug",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"notes-z-drug"},

        "randomisation-table-data-z-drug":		{url:"$H/m/library/randomisation-table-data.html",Table:"randomisation-table-z-drug",form_module:"randomisation-table-form-z-drug"},
        "randomisation-table-form-z-drug":		{url:"$H/m/library/randomisation-table-form.html",Table:"randomisation-table-z-drug"},

        "adverse-event-data-z-drug":             {url:"$H/m/library/adverse-event-data.html",Table:"adverse-event-z-drug",form_module:"adverse-event-form-z-drug",task_name:"Adverse Event"},
        "adverse-event-form-z-drug":             {url:"$H/m/library/adverse-event-form.html",Table:"adverse-event-z-drug",task_name:"Adverse Event"},
        "file-notes-data-z-drug":                {url:"$H/m/library/file-notes-data.html",Table:"file-notes-z-drug",form_module:"file-notes-form-z-drug",task_name:"File Notes"},
        "file-notes-form-z-drug":                {url:"$H/m/library/file-notes-form.html",Table:"file-notes-z-drug",task_name:"File Notes"},
        "protocol-amendments-data-z-drug":       {url:"$H/m/library/upload-file-data.html",Table:"protocol-amendments-z-drug",form_module:"protocol-amendments-form-z-drug",task_name:"Protocol Amendments"},
        "protocol-amendments-form-z-drug":       {url:"$H/m/library/upload-file-form.html",Table:"protocol-amendments-z-drug",task_name:"Protocol Amendments"},
        
        "s-visit-date-data-z-drug":              {url:"$H/m/library/date-data.html",Table:"s-visit-date-z-drug",form_module:"s-visit-date-form-z-drug",task_name:"Screening - Visit Date"},
        "s-visit-date-form-z-drug":              {url:"$H/m/library/date-form.html",Table:"s-visit-date-z-drug",task_name:"Screening - Visit Date"},
        "s-anthropometry-data-z-drug":           {url:"$H/m/library/anthropometry-data.html",Table:"s-anthropometry-z-drug",form_module:"s-anthropometry-form-z-drug",task_name:"Screening - Anthropometry"},
        "s-anthropometry-form-z-drug":           {url:"$H/m/library/anthropometry-form.html",Table:"s-anthropometry-z-drug",task_name:"Screening - Anthropometry"},
        "s-ethnicity-data-z-drug":               {url:"$H/m/library/ethnicity-data.html",Table:"s-ethnicity-z-drug",form_module:"s-ethnicity-form-z-drug"},
        "s-ethnicity-form-z-drug":               {url:"$H/m/library/ethnicity-form.html",Table:"s-ethnicity-z-drug",task_name:"Screening - Ethnicity"},
        "s-lifestyle-data-z-drug":               {url:"$H/m/library/lifestyle-data.html",Table:"s-lifestyle-z-drug",form_module:"s-lifestyle-form-z-drug",task_name:"Screening - Lifestyle"},
        "s-lifestyle-form-z-drug":               {url:"$H/m/library/lifestyle-form.html",Table:"s-lifestyle-z-drug",task_name:"Screening - Lifestyle"},
        "s-education-data-z-drug":               {url:"$H/m/library/education-data.html",Table:"s-education-z-drug",form_module:"s-education-form-z-drug",task_name:"Screening - Education"},
        "s-education-form-z-drug":               {url:"$H/m/library/education-form.html",Table:"s-education-z-drug",task_name:"Screening - Education"},
        "s-medications-data-z-drug":              {url:"$H/m/library/medications-data.html",Table:"s-medications-z-drug",form_module:"s-medications-form-z-drug",task_name:"Screening - Concomitant Medication"},
        "s-medications-form-z-drug":              {url:"$H/m/library/medications-form.html",Table:"s-medications-z-drug",task_name:"Screening - Concomitant Medication"},
        "s-concom-file-data-z-drug":		        {url:"$H/m/library/upload-file-data.html",Table:"s-concom-file-z-drug",form_module:"s-concom-file-form-z-drug",task_name:"Screening - Concomitant medication file upload"},
        "s-concom-file-form-z-drug":		        {url:"$H/m/library/upload-file-form.html",Table:"s-concom-file-z-drug",task_name:"Screening - Concomitant medication file upload"},
        "s-medical-history-data-z-drug":         {url:"$H/m/library/medical-history-data.html",Table:"s-medical-history-z-drug",form_module:"s-medical-history-form-z-drug",task_name:"Screening - Medical History"},
        "s-medical-history-form-z-drug":         {url:"$H/m/library/medical-history-form.html",Table:"s-medical-history-z-drug",task_name:"Screening - Medical History"},
        "s-ess-data-z-drug":                     {url:"$H/m/library/ess-data.html",Table:"s-ess-z-drug",form_module:"s-ess-form-z-drug",task_name:"Screening - Epworth Sleepiness Scale"},
        "s-ess-form-z-drug":                     {url:"$H/m/library/ess-form.html",Table:"s-ess-z-drug",task_name:"Screening - Epworth Sleepiness Scale"},
        "s-mmse-data-z-drug":                     {url:"$H/m/library/mmse-data.html",Table:"s-mmse-z-drug",form_module:"s-mmse-form-z-drug",task_name:"Screening - Mini Mental State Examination"},
        "s-mmse-form-z-drug":                     {url:"$H/m/library/mmse-form.html",Table:"s-mmse-z-drug",task_name:"Screening - Mini Mental State Examination"},
        "s-dass-data-z-drug":                    {url:"$H/m/library/dass-data.html",Table:"s-dass-z-drug",form_module:"s-dass-form-z-drug",task_name:"Screening - Depression Anxiety Stress Scale (DASS-21)"},
        "s-dass-form-z-drug":                    {url:"$H/m/library/dass-form.html",Table:"s-dass-z-drug",task_name:"Screening - Depression Anxiety Stress Scale (DASS-21)"},
        "s-psqi-data-z-drug":                    {url:"$H/m/library/psqi-data.html",Table:"s-psqi-z-drug",form_module:"s-psqi-form-z-drug",task_name:"Screening - Pittsburgh Sleep Quality Index (PSQI)"},
        "s-psqi-form-z-drug":                    {url:"$H/m/library/psqi-form.html",Table:"s-psqi-z-drug",task_name:"Screening - Pittsburgh Sleep Quality Index (PSQI)"},
        "s-sleep-diary-data-z-drug":		                {url:"$H/m/library/upload-file-data.html",Table:"s-sleep-diary-z-drug",form_module:"s-sleep-diary-form-z-drug",task_name:"Screeening - Sleep Diary"},
        "s-sleep-diary-form-z-drug":		                {url:"$H/m/library/upload-file-form.html",Table:"s-sleep-diary-z-drug",task_name:"Screeening - Sleep Diary"},
        "s-psg300-data-z-drug":		                {url:"$H/m/library/psg300-data.html",Table:"s-psg300-z-drug",form_module:"s-psg300-form-z-drug",task_name:"Screeening - PSG300"},
        "s-psg300-form-z-drug":		                {url:"$H/m/library/psg300-form.html",Table:"s-psg300-z-drug",task_name:"Screeening - PSG300"},
        "s-source-doc-data-z-drug":		                {url:"$H/m/library/upload-file-data.html",Table:"s-source-doc-z-drug",form_module:"s-source-doc-form-z-drug",task_name:"Screeening - Source Documents"},
        "s-source-doc-form-z-drug":		                {url:"$H/m/library/upload-file-form.html",Table:"s-source-doc-z-drug",task_name:"Screeening - Source Documents"},

        "v1e-visit-date-data-z-drug":              {url:"$H/m/library/date-data.html",Table:"v1e-visit-date-z-drug",form_module:"v1e-visit-date-form-z-drug",task_name:"Visit 1 Day 1 Evening - Visit Date"},
        "v1e-visit-date-form-z-drug":              {url:"$H/m/library/date-form.html",Table:"v1e-visit-date-z-drug",task_name:"Visit 1 Day 1 Evening - Visit Date"},
        "v1e-anthropometry-data-z-drug":           {url:"$H/m/library/anthropometry-short-data.html",Table:"v1e-anthropometry-z-drug",form_module:"v1e-anthropometry-form-z-drug",task_name:"Visit 1 Day 1 Evening - Anthropometry"},
        "v1e-anthropometry-form-z-drug":           {url:"$H/m/library/anthropometry-short-form.html",Table:"v1e-anthropometry-z-drug",task_name:"Visit 1 Day 1 Evening - Anthropometry"},
        "v1e-ess-data-z-drug":                    {url:"$H/m/library/ess-data.html",Table:"v1e-ess-z-drug",form_module:"v1e-ess-form-z-drug",task_name:"Visit 1 Day 1 Evening - ESS"},
        "v1e-ess-form-z-drug":                    {url:"$H/m/library/ess-form.html",Table:"v1e-ess-z-drug",task_name:"Visit 1 Day 1 Evening - ESS"},
        "v1e-dass-data-z-drug":                    {url:"$H/m/library/dass-data.html",Table:"v1e-dass-z-drug",form_module:"v1e-dass-form-z-drug",task_name:"Visit 1 Day 1 Evening - DASS"},
        "v1e-dass-form-z-drug":                    {url:"$H/m/library/dass-form.html",Table:"v1e-dass-z-drug",task_name:"Visit 1 Day 1 Evening - DASS"},
        "v1e-kss-data-z-drug":                    {url:"$H/m/library/kss-data.html",Table:"v1e-kss-z-drug",form_module:"v1e-kss-form-z-drug",task_name:"Visit 1 Day 1 Evening - KSS"},
        "v1e-kss-form-z-drug":                    {url:"$H/m/library/kss-form.html",Table:"v1e-kss-z-drug",task_name:"Visit 1 Day 1 Evening - KSS"},
        "v1e-word-pairs-set1-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-practice.html"},
        "v1e-word-pairs-set1-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial1.html"},
        "v1e-word-pairs-set1-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial2.html"},
        "v1e-word-pairs-set1-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial3.html"},
        "v1e-word-pairs-set2-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-practice.html"},
        "v1e-word-pairs-set2-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial1.html"},
        "v1e-word-pairs-set2-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial2.html"},
        "v1e-word-pairs-set2-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial3.html"},
        "v1e-ftt-data-z-drug":		                        {url:"$H/m/neurocog/finger-tapping12-before-data.html",Table:"v1e-ftt-z-drug",form_module:"v1e-ftt-form-z-drug",task_name:"Visit 1 Day 1 Evening - FTT (12 mins)"},
        "v1e-ftt-form-z-drug":		                        {url:"$H/m/neurocog/finger-tapping12-before-form.html",Table:"v1e-ftt-z-drug",task_name:"Visit 1 Day 1 Evening FFT (12 mins)"},

        "v1m-kss-data-z-drug":                    {url:"$H/m/library/kss-data.html",Table:"v1m-kss-z-drug",form_module:"v1m-kss-form-z-drug",task_name:"Visit 1 Day 2 Morning - KSS"},
        "v1m-kss-form-z-drug":                    {url:"$H/m/library/kss-form.html",Table:"v1m-kss-z-drug",task_name:"Visit 1 Day 2 Morning - KSS"},
        "v1m-word-pairs-recall-set1-z-drug":	            {url:"$H/m/word-pairs/morning-wordpairs-set1.html"},
        "v1m-word-pairs-recall-set2-z-drug":	            {url:"$H/m/word-pairs/morning-wordpairs-set2.html"},
        "v1m-word-pairs-set1-data-z-drug":		{url:"$H/m/library/word-pairs-data.html",Table:"v1m-word-pairs-set1-z-drug",form_module:"v1m-word-pairs-set1-form-z-drug",task_name:"Visit 1 Day 2 Morning - Word Pair Set 1"},
        "v1m-word-pairs-set1-form-z-drug":		{url:"$H/m/library/word-pairs-form.html",Table:"v1m-word-pairs-set1-z-drug",task_name:"Visit 1 Day 2 Morning - Word Pair Set 1"},
        "v1m-word-pairs-set2-data-z-drug":		{url:"$H/m/library/word-pairs-data.html",Table:"v1m-word-pairs-set2-z-drug",form_module:"v1m-word-pairs-set2-form-z-drug",task_name:"Visit 1 Day 2 Morning - Word Pair Set 2"},
        "v1m-word-pairs-set2-form-z-drug":		{url:"$H/m/library/word-pairs-form.html",Table:"v1m-word-pairs-set2-z-drug",task_name:"Visit 1 Day 2 Morning - Word Pair Set 2"},
        "v1m-ftt-data-z-drug":		            {url:"$H/m/neurocog/finger-tapping6-after-data.html",Table:"v1m-ftt-z-drug",form_module:"v1m-ftt-form-z-drug",Table2:"v1e-ftt-z-drug",task_name:"Visit 1 Day 2 Morning - FTT (6 mins)"},
        "v1m-ftt-form-z-drug":		            {url:"$H/m/neurocog/finger-tapping6-after-form.html",Table:"v1m-ftt-z-drug",task_name:"Visit 1 Day 2 Morning (6 mins"},

        "v2e-visit-date-data-z-drug":              {url:"$H/m/library/date-data.html",Table:"v2e-visit-date-z-drug",form_module:"v2e-visit-date-form-z-drug",task_name:"Visit 2 Day 1 Evening - Visit Date"},
        "v2e-visit-date-form-z-drug":              {url:"$H/m/library/date-form.html",Table:"v2e-visit-date-z-drug",task_name:"Visit 2 Day 1 Evening - Visit Date"},
        "v2e-anthropometry-data-z-drug":           {url:"$H/m/library/anthropometry-short-data.html",Table:"v2e-anthropometry-z-drug",form_module:"v2e-anthropometry-form-z-drug",task_name:"Visit 2 Day 1 Evening - Anthropometry"},
        "v2e-anthropometry-form-z-drug":           {url:"$H/m/library/anthropometry-short-form.html",Table:"v2e-anthropometry-z-drug",task_name:"Visit 2 Day 1 Evening - Anthropometry"},
        "v2e-ess-data-z-drug":                    {url:"$H/m/library/ess-data.html",Table:"v2e-ess-z-drug",form_module:"v2e-ess-form-z-drug",task_name:"Visit 2 Day 1 Evening - ESS"},
        "v2e-ess-form-z-drug":                    {url:"$H/m/library/ess-form.html",Table:"v2e-ess-z-drug",task_name:"Visit 2 Day 1 Evening - ESS"},
        "v2e-dass-data-z-drug":                    {url:"$H/m/library/dass-data.html",Table:"v2e-dass-z-drug",form_module:"v2e-dass-form-z-drug",task_name:"Visit 2 Day 1 Evening - DASS"},
        "v2e-dass-form-z-drug":                    {url:"$H/m/library/dass-form.html",Table:"v2e-dass-z-drug",task_name:"Visit 2 Day 1 Evening - DASS"},
        "v2e-kss-data-z-drug":                    {url:"$H/m/library/kss-data.html",Table:"v2e-kss-z-drug",form_module:"v2e-kss-form-z-drug",task_name:"Visit 2 Day 1 Evening - KSS"},
        "v2e-kss-form-z-drug":                    {url:"$H/m/library/kss-form.html",Table:"v2e-kss-z-drug",task_name:"Visit 2 Day 1 Evening - KSS"},
        "v2e-word-pairs-set1-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-practice.html"},
        "v2e-word-pairs-set1-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial1.html"},
        "v2e-word-pairs-set1-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial2.html"},
        "v2e-word-pairs-set1-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial3.html"},
        "v2e-word-pairs-set2-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-practice.html"},
        "v2e-word-pairs-set2-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial1.html"},
        "v2e-word-pairs-set2-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial2.html"},
        "v2e-word-pairs-set2-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial3.html"},
        "v2e-ftt-data-z-drug":		                        {url:"$H/m/neurocog/finger-tapping12-before-data.html",Table:"v2e-ftt-z-drug",form_module:"v2e-ftt-form-z-drug",task_name:"Visit 2 Day 1 Evening - FTT (12 mins)"},
        "v2e-ftt-form-z-drug":		                        {url:"$H/m/neurocog/finger-tapping12-before-form.html",Table:"v2e-ftt-z-drug",task_name:"Visit 2 Day 1 Evening FFT (12 mins)"},

        "v2m-kss-data-z-drug":                    {url:"$H/m/library/kss-data.html",Table:"v2m-kss-z-drug",form_module:"v2m-kss-form-z-drug",task_name:"Visit 2 Day 2 Morning - KSS"},
        "v2m-kss-form-z-drug":                    {url:"$H/m/library/kss-form.html",Table:"v2m-kss-z-drug",task_name:"Visit 2 Day 2 Morning - KSS"},
        "v2m-word-pairs-recall-set1-z-drug":	            {url:"$H/m/word-pairs/morning-wordpairs-set1.html"},
        "v2m-word-pairs-recall-set2-z-drug":	            {url:"$H/m/word-pairs/morning-wordpairs-set2.html"},
        "v2m-word-pairs-set1-data-z-drug":		{url:"$H/m/library/word-pairs-data.html",Table:"v2m-word-pairs-set1-z-drug",form_module:"v2m-word-pairs-set1-form-z-drug",task_name:"Visit 2 Day 2 Morning - Word Pair Set 1"},
        "v2m-word-pairs-set1-form-z-drug":		{url:"$H/m/library/word-pairs-form.html",Table:"v2m-word-pairs-set1-z-drug",task_name:"Visit 2 Day 2 Morning - Word Pair Set 1"},
        "v2m-word-pairs-set2-data-z-drug":		{url:"$H/m/library/word-pairs-data.html",Table:"v2m-word-pairs-set2-z-drug",form_module:"v2m-word-pairs-set2-form-z-drug",task_name:"Visit 2 Day 2 Morning - Word Pair Set 2"},
        "v2m-word-pairs-set2-form-z-drug":		{url:"$H/m/library/word-pairs-form.html",Table:"v2m-word-pairs-set2-z-drug",task_name:"Visit 2 Day 2 Morning - Word Pair Set 2"},
        "v2m-ftt-data-z-drug":		            {url:"$H/m/neurocog/finger-tapping6-after-data.html",Table:"v2m-ftt-z-drug",form_module:"v2m-ftt-form",Table2:"v2e-ftt-z-drug",task_name:"Visit 2 Day 2 Morning - FTT (6 mins)"},
        "v2m-ftt-form-z-drug":		            {url:"$H/m/neurocog/finger-tapping6-after-form.html",Table:"v2m-ftt-z-drug",task_name:"Visit 2 Day 2 Morning (6 mins"},


    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
//    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
//    }
})();
