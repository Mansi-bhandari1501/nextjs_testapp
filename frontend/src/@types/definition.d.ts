interface AbsenceInfo {
    studentId: string;
    count: number;
  }
  interface Student {
    uuid: string;
    first_name: string;
    last_name: string;
    dni: string;
    session_hours: {
      practical_absence_hours: number;
      theoretical_absence_hours: number;
      total_practical_hours: number;
      total_theoretical_hours: number;
    };
    created_at: string;
    updated_at: string;
  }
  interface JustificationList {
    uuid: string;
    first_name: string;
    last_name: string;
    attendance_status: string;
  }
  interface SessionSettings {
    no_of_sessions: number;
    sessions_in_week: number;
  }
  interface Attendance {
    student_id: string;
    status: "presented" | "absent" | "late" | "dispensed" | "justified";
    created_at: string;
    updated_at: string;
    count: number;
  }
  interface groupPath {
    parentAcademicPeriod: string;
    academicPeriod: string;
    academicElement: string;
    academicElementuuid: string;
  }
  interface Session {
    session_id: string;
    expected_date: string;
    real_date: string;
    hours: number;
    week: number;
    group_id: string;
    uuid: string;
    type: "theoretical_practical" | "practical";
    attendances: Attendance[];
    general_information: any;
  }
  //Get attendance list from UUID of the academic group
  interface DataGroupInterface {
    students: Student[];
    settings: SessionSettings;
    no_of_students: number;
    sessions: Session[];
    created_at: string;
    updated_at: string;
  }
  //posting the attendance
  interface AttendanceInterface {
    student_id?: string[];
    status: "presented" | "absent" | "late" | "dispensed";
  }
  interface AcademicElement {
    uuid: string;
    name: string;
    version: string;
    abbr: string;
    type: string;
    created_at: string;
    updated_at: string;
    academic_groups: any[];
  }
  interface AcademicPeriod {
    uuid: string;
    name: string;
    start_date: string;
    end_date: string;
    type: string;
    created_at: string;
    updated_at: string;
    academic_elements: AcademicElement[];
  }
  interface ParentAcademicPeriod {
    uuid: string;
    name: string;
    start_date: string;
    end_date: string;
    type: string;
    created_at: string;
    updated_at: string;
    academic_periods: AcademicPeriod[];
  }
  interface AcademicGroup {
    uuid: string;
    name: string;
    no_of_students: number;
    created_at: string;
    updated_at: string;
  }
  interface AcademicGroupInitialState {
    groupTitle: string;
    academicGroup: AcademicGroup[];
    loading: boolean;
    path: groupPath;
    error: errorResponse | null;
    semester: string;
    element: string;
    academicPeriods: ParentAcademicPeriod[];
    academicElementsGroups: any[];
    academicGroupID: string;
    studentCount: number;
  }
  
  interface User {
    uuid: string;
    full_name: string;
    email_id: string;
    created_at: string;
    updated_at: string;
    user_logged_in_name: string;
    user_logged_in_email: string;
  }
  
  interface NavLink {
    parent_academic_period: string;
    icon: JSX.Element;
    link?: string;
    academic_period?: any;
  }
  
  interface NestedListProps {
    title: string;
    icon: JSX.Element;
    link?: string;
    academic_period?: AcademicPeriod[];
    index: number;
    key: number | string;
  }
  
  interface LoginKeyType {
    firebaseConfig: FirebaseConfigType;
    tenantId: string;
    samlProvider: string;
  }
  
  interface FirebaseConfigType {
    apiKey: string;
    authDomain: string;
  }
  
  interface SessionInterface {
    session_id: string;
    type: string;
    hours: number;
    session_date: Date | null;
  }
  
  interface Items {
    icon: JSX.Element;
    outlined?: JSX.Element;
    label: string;
    value?: string | null;
    color: string;
    bgColor: string;
  }
  interface initialStateData {
    userDetails: User;
    loading: boolean;
    error: errorResponse | null;
  }
  interface ModalState {
    isOpen: boolean;
    reason: string;
    severity: AlertColor | undefined;
  }
  interface errorResponse {
    statusCode?: number;
    message?: any;
  }
  interface SearchBarSectionData {
    children?: ReactNode;
    searchValue: string;
    setSearchValue: any;
  }
  interface Column {
    id: string;
    label: string;
    minHeight?: number;
    minWidth?: number;
    align?: string;
    format?: (value: number) => string;
    padding?: number;
    session?: { id: string; label: string; sessionId?: string }[]; // Update session property
    border?: string;
    position?: string;
  }
  interface SubColumn {
    id: string;
    label: string;
  }
  interface MenuProps {
    label: string;
    value: string;
  }
  interface GeneralInformation {
    absences: number;
    lateness: number;
    attendance: number;
  }
  
  interface SessionInfo {
    uuid: string;
    type: string;
    hours: number;
    week: number;
    general_information: GeneralInformation;
    real_date: string;
  }
  
  interface JustificationInterface {
    session_uuid: string;
    student_id: string | undefined;
    comment: null;
    file: string;
  }
  
  interface UploadUrlInterface {
    session_uuid: string;
    student_uuid: string | undefined;
    file_name: string;
    file_size: number;
  }
  
  interface ReadUrlInterface {
    session_uuid: string;
    student_uuid: string;
  }
  
  interface GetStudentJustificationInterface {
    session_uuid: string;
    academic_group_uuid: string;
    status: [string];
  }
  interface SelectProps {
    label: string;
    value: string;
    status: string;
  }
  