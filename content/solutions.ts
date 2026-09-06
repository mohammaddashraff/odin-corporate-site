import type { LocalizedText } from "@/lib/i18n";
export const copy = (en: string, ar: string): LocalizedText => ({ en, ar });

export const solutions = [
  {
    slug: "erp",
    short: "ERP",
    name: copy("Enterprise resource planning", "تخطيط موارد المؤسسة"),
    promise: copy("Bring your business together.", "اجمع أعمالك في نظام واحد."),
    description: copy(
      "Connect finance, inventory, purchasing, and operations in a system built around the way your business works.",
      "اربط الحسابات والمخزون والمشتريات والعمليات في نظام مبني على طريقة عمل شركتك.",
    ),
    features: [
      copy("Accounting & finance", "الحسابات والمالية"),
      copy("Inventory & purchasing", "المخزون والمشتريات"),
      copy("Sales & point of sale", "المبيعات ونقاط البيع"),
      copy("Reporting & approvals", "التقارير والموافقات"),
    ],
    scene: copy("Your operations, connected", "عملياتك مترابطة"),
    rows: [
      copy("Sales order", "أمر بيع"),
      copy("Inventory movement", "حركة مخزون"),
      copy("Accounting entry", "قيد محاسبي"),
    ],
    outcome: copy("One connected workflow", "دورة عمل مترابطة"),
  },
  {
    slug: "hr",
    short: "HR",
    name: copy("Human resources systems", "أنظمة الموارد البشرية"),
    promise: copy(
      "Give your people room to grow.",
      "خلّي فريقك يركز على النمو.",
    ),
    description: copy(
      "Make everyday HR simpler, from employee records and attendance to leave requests, payroll workflows, and performance.",
      "بسّط شغل الموارد البشرية، من ملفات الموظفين والحضور إلى الإجازات ودورات الرواتب وتقييم الأداء.",
    ),
    features: [
      copy("Employee records", "ملفات الموظفين"),
      copy("Attendance & leave", "الحضور والإجازات"),
      copy("Payroll workflows", "دورات الرواتب"),
      copy("Performance management", "إدارة الأداء"),
    ],
    scene: copy("A better employee journey", "تجربة أفضل للموظف"),
    rows: [
      copy("Employee request", "طلب الموظف"),
      copy("Manager approval", "موافقة المدير"),
      copy("HR record updated", "تحديث ملف الموظف"),
    ],
    outcome: copy("People before paperwork", "وقت لفريقك بدل الأوراق"),
  },
  {
    slug: "crm",
    short: "CRM",
    name: copy("Customer relationship management", "إدارة علاقات العملاء"),
    promise: copy(
      "Turn conversations into relationships.",
      "حوّل التواصل لعلاقات مستمرة.",
    ),
    description: copy(
      "Bring leads, customer conversations, sales opportunities, and follow-ups into a workspace your team can actually use.",
      "اجمع العملاء المحتملين والمحادثات وفرص البيع والمتابعات في مساحة عمل واضحة لفريقك.",
    ),
    features: [
      copy("Leads & sales pipelines", "العملاء وفرص البيع"),
      copy("Customer profiles", "ملفات العملاء"),
      copy("Tasks & follow-ups", "المهام والمتابعات"),
      copy("Sales reporting", "تقارير المبيعات"),
    ],
    scene: copy("Every relationship, in view", "كل علاقاتك قدامك"),
    rows: [
      copy("New inquiry", "استفسار جديد"),
      copy("Discovery conversation", "مناقشة الاحتياج"),
      copy("Proposal & follow-up", "العرض والمتابعة"),
    ],
    outcome: copy(
      "A clearer path to your next sale",
      "طريق أوضح لفرصة البيع التالية",
    ),
  },
  {
    slug: "lms",
    short: "LMS",
    name: copy("Learning management systems", "أنظمة إدارة التعلم"),
    promise: copy(
      "Make learning a connected experience.",
      "خلّي التعلم تجربة متكاملة.",
    ),
    description: copy(
      "Create a home for courses, content, assessments, and learner progress, whether you train a team or teach a community.",
      "وفّر مكان واحد للدورات والمحتوى والاختبارات ومتابعة التقدم، سواء لتدريب فريقك أو لتعليم مجتمع كامل.",
    ),
    features: [
      copy("Courses & learning paths", "الدورات ومسارات التعلم"),
      copy("Content & assessments", "المحتوى والاختبارات"),
      copy("Learner progress", "متابعة تقدم المتعلمين"),
      copy("Instructor workspace", "مساحة عمل المدرب"),
    ],
    scene: copy(
      "From first lesson to next milestone",
      "من أول درس للخطوة التالية",
    ),
    rows: [
      copy("Explore a learning path", "اكتشاف مسار تعلم"),
      copy("Learn & practice", "تعلم وتطبيق"),
      copy("Review progress", "مراجعة التقدم"),
    ],
    outcome: copy("Learning with a clear direction", "تعلم بخطوات واضحة"),
  },
  {
    slug: "education",
    short: "EDU",
    name: copy(
      "Education management systems",
      "أنظمة إدارة المؤسسات التعليمية",
    ),
    promise: copy(
      "Connect the whole education journey.",
      "اربط رحلة التعليم بالكامل.",
    ),
    description: copy(
      "Bring admissions, student records, scheduling, fees, and communication together for schools, academies, and training centers.",
      "اربط القبول وملفات الطلاب والجداول والرسوم والتواصل في المدارس والأكاديميات ومراكز التدريب.",
    ),
    features: [
      copy("Admissions & student records", "القبول وملفات الطلاب"),
      copy("Schedules & attendance", "الجداول والحضور"),
      copy("Fees & administration", "الرسوم والإدارة"),
      copy("Student & parent portals", "بوابات الطلاب وأولياء الأمور"),
    ],
    scene: copy("One connected campus", "مؤسسة تعليمية مترابطة"),
    rows: [
      copy("Student admission", "قبول الطالب"),
      copy("Schedule & enrollment", "الجدول والتسجيل"),
      copy("Academic follow-up", "المتابعة الأكاديمية"),
    ],
    outcome: copy("More time for education", "وقت أكبر للتعليم"),
  },
  {
    slug: "mobile-apps",
    short: "APP",
    name: copy("Mobile applications", "تطبيقات الموبايل"),
    promise: copy(
      "Put your next idea in their hands.",
      "خلّي فكرتك بين إيدين جمهورك.",
    ),
    description: copy(
      "Turn a service, a business workflow, or a new product idea into a mobile experience designed around the people using it.",
      "حوّل خدمتك أو دورة العمل أو فكرة منتج جديد لتطبيق موبايل مصمم لاحتياج مستخدميه.",
    ),
    features: [
      copy("iOS & Android experiences", "تجارب iOS وAndroid"),
      copy("Customer & team applications", "تطبيقات العملاء والفرق"),
      copy("Connected backend systems", "أنظمة خلفية مترابطة"),
      copy("Product design & development", "تصميم وتطوير المنتجات"),
    ],
    scene: copy("Your service, wherever they are", "خدمتك معاهم في كل مكان"),
    rows: [
      copy("Discover your service", "اكتشاف خدمتك"),
      copy("Take action on mobile", "تنفيذ الطلب من الموبايل"),
      copy("Stay connected", "متابعة وتواصل مستمر"),
    ],
    outcome: copy("An idea made usable", "فكرة قابلة للاستخدام"),
  },
] as const;
export type Solution = (typeof solutions)[number];
export const deliverySteps = [
  {
    title: copy("Understand", "نفهم"),
    text: copy(
      "We start with your goals, your users, and how work happens today.",
      "نبدأ بأهدافك ومستخدميك وطريقة الشغل الحالية.",
    ),
  },
  {
    title: copy("Design", "نصمم"),
    text: copy(
      "Turn the right requirements into clear journeys and a practical plan.",
      "نحوّل المتطلبات لتجربة واضحة وخطة تنفيذ مناسبة.",
    ),
  },
  {
    title: copy("Build", "نطوّر"),
    text: copy(
      "Develop, integrate, and test the solution with your team's feedback.",
      "نطوّر الحل ونربطه ونختبره مع ملاحظات فريقك.",
    ),
  },
  {
    title: copy("Launch & evolve", "نطلق ونطوّر"),
    text: copy(
      "Prepare for launch and plan the support and next steps your project needs.",
      "نجهّز الإطلاق ونحدد الدعم والخطوات التالية اللي يحتاجها مشروعك.",
    ),
  },
];
export const companyFaqs = [
  {
    q: copy("What can ODIN build for us?", "إيه الحلول اللي ODIN تقدر تقدمها؟"),
    a: copy(
      "Business systems such as ERP, HR, and CRM; learning and education platforms; mobile applications; and custom software. Tell us the problem you want to solve, even if it doesn't fit a category.",
      "أنظمة ERP وHR وCRM، ومنصات التعلم وإدارة التعليم، وتطبيقات الموبايل والبرمجيات المخصصة. احكيلنا المشكلة اللي عايز تحلها حتى لو مش ضمن تصنيف معين.",
    ),
  },
  {
    q: copy(
      "Can the solution fit our existing workflow?",
      "هل الحل ممكن يتناسب مع طريقة شغلنا؟",
    ),
    a: copy(
      "That's where we start. We review your processes, users, and requirements before defining what to build, adapt, or integrate.",
      "ده أساس شغلنا. بنراجع العمليات والمستخدمين والمتطلبات قبل ما نحدد إيه اللي هنبنيه أو نخصصه أو نربطه.",
    ),
  },
  {
    q: copy(
      "Can you connect with systems we already use?",
      "ممكن نربط الحل بالأنظمة اللي بنستخدمها؟",
    ),
    a: copy(
      "We can evaluate integrations as part of your project. The approach depends on the APIs, access, and data available in your existing systems.",
      "بنقيّم التكامل كجزء من المشروع. طريقة الربط بتعتمد على واجهات البرمجة والصلاحيات والبيانات المتاحة في أنظمتك الحالية.",
    ),
  },
  {
    q: copy(
      "How do we get a timeline and a quote?",
      "إزاي نعرف التكلفة ومدة التنفيذ؟",
    ),
    a: copy(
      "Share your goals, the features you need, and any timing constraints. We use that conversation to define the scope and a proposal specific to your project.",
      "شاركنا أهدافك والمميزات المطلوبة وأي مواعيد مهمة. بناءً على المناقشة بنحدد نطاق العمل وعرض مناسب لمشروعك.",
    ),
  },
];
