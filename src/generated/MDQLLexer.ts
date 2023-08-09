// Generated from MDQL.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class MDQLLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly COMPARE_OPERATOR = 2;
	public static readonly OP_EQUALS = 3;
	public static readonly OP_NOTEQUALS = 4;
	public static readonly OP_CONTAINS = 5;
	public static readonly OP_ENDS_WITH = 6;
	public static readonly OP_STARTS_WITH = 7;
	public static readonly NEWLINE = 8;
	public static readonly TASKS = 9;
	public static readonly DOCUMENTS = 10;
	public static readonly TASKLIST = 11;
	public static readonly LIST = 12;
	public static readonly TABLE = 13;
	public static readonly FROM = 14;
	public static readonly WHERE = 15;
	public static readonly AND = 16;
	public static readonly SORT = 17;
	public static readonly DESC = 18;
	public static readonly FIELD = 19;
	public static readonly STRING_LITERAL = 20;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            null, "'='", 
                                                            "'!='", "'=~'", 
                                                            "'=$'", "'=^'", 
                                                            null, "'tasks'", 
                                                            "'documents'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "COMPARE_OPERATOR", 
                                                             "OP_EQUALS", 
                                                             "OP_NOTEQUALS", 
                                                             "OP_CONTAINS", 
                                                             "OP_ENDS_WITH", 
                                                             "OP_STARTS_WITH", 
                                                             "NEWLINE", 
                                                             "TASKS", "DOCUMENTS", 
                                                             "TASKLIST", 
                                                             "LIST", "TABLE", 
                                                             "FROM", "WHERE", 
                                                             "AND", "SORT", 
                                                             "DESC", "FIELD", 
                                                             "STRING_LITERAL" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "COMPARE_OPERATOR", "OP_EQUALS", "OP_NOTEQUALS", "OP_CONTAINS", 
		"OP_ENDS_WITH", "OP_STARTS_WITH", "NEWLINE", "TASKS", "DOCUMENTS", "TASKLIST", 
		"LIST", "TABLE", "FROM", "WHERE", "AND", "SORT", "DESC", "FIELD", "STRING_LITERAL",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MDQLLexer._ATN, MDQLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "MDQL.g4"; }

	public get literalNames(): (string | null)[] { return MDQLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MDQLLexer.symbolicNames; }
	public get ruleNames(): string[] { return MDQLLexer.ruleNames; }

	public get serializedATN(): number[] { return MDQLLexer._serializedATN; }

	public get channelNames(): string[] { return MDQLLexer.channelNames; }

	public get modeNames(): string[] { return MDQLLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,20,193,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,49,8,1,
	1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,4,7,66,8,7,
	11,7,12,7,67,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,3,10,104,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
	1,11,3,11,114,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,
	12,126,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,136,8,13,1,14,
	1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,148,8,14,1,15,1,15,1,
	15,1,15,1,15,1,15,3,15,156,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
	3,16,166,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,176,8,17,1,18,
	4,18,179,8,18,11,18,12,18,180,1,19,1,19,1,19,1,19,5,19,187,8,19,10,19,12,
	19,190,9,19,1,19,1,19,0,0,20,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
	10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,1,0,3,2,
	0,10,10,13,13,4,0,46,46,48,57,65,90,97,122,1,0,39,39,208,0,1,1,0,0,0,0,
	3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,
	0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,
	0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,
	0,37,1,0,0,0,0,39,1,0,0,0,1,41,1,0,0,0,3,48,1,0,0,0,5,50,1,0,0,0,7,52,1,
	0,0,0,9,55,1,0,0,0,11,58,1,0,0,0,13,61,1,0,0,0,15,65,1,0,0,0,17,71,1,0,
	0,0,19,77,1,0,0,0,21,103,1,0,0,0,23,113,1,0,0,0,25,125,1,0,0,0,27,135,1,
	0,0,0,29,147,1,0,0,0,31,155,1,0,0,0,33,165,1,0,0,0,35,175,1,0,0,0,37,178,
	1,0,0,0,39,182,1,0,0,0,41,42,5,44,0,0,42,2,1,0,0,0,43,49,3,5,2,0,44,49,
	3,7,3,0,45,49,3,9,4,0,46,49,3,11,5,0,47,49,3,13,6,0,48,43,1,0,0,0,48,44,
	1,0,0,0,48,45,1,0,0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,4,1,0,0,0,50,51,5,
	61,0,0,51,6,1,0,0,0,52,53,5,33,0,0,53,54,5,61,0,0,54,8,1,0,0,0,55,56,5,
	61,0,0,56,57,5,126,0,0,57,10,1,0,0,0,58,59,5,61,0,0,59,60,5,36,0,0,60,12,
	1,0,0,0,61,62,5,61,0,0,62,63,5,94,0,0,63,14,1,0,0,0,64,66,7,0,0,0,65,64,
	1,0,0,0,66,67,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,70,6,
	7,0,0,70,16,1,0,0,0,71,72,5,116,0,0,72,73,5,97,0,0,73,74,5,115,0,0,74,75,
	5,107,0,0,75,76,5,115,0,0,76,18,1,0,0,0,77,78,5,100,0,0,78,79,5,111,0,0,
	79,80,5,99,0,0,80,81,5,117,0,0,81,82,5,109,0,0,82,83,5,101,0,0,83,84,5,
	110,0,0,84,85,5,116,0,0,85,86,5,115,0,0,86,20,1,0,0,0,87,88,5,116,0,0,88,
	89,5,97,0,0,89,90,5,115,0,0,90,91,5,107,0,0,91,92,5,108,0,0,92,93,5,105,
	0,0,93,94,5,115,0,0,94,104,5,116,0,0,95,96,5,84,0,0,96,97,5,65,0,0,97,98,
	5,83,0,0,98,99,5,75,0,0,99,100,5,76,0,0,100,101,5,73,0,0,101,102,5,83,0,
	0,102,104,5,84,0,0,103,87,1,0,0,0,103,95,1,0,0,0,104,22,1,0,0,0,105,106,
	5,108,0,0,106,107,5,105,0,0,107,108,5,115,0,0,108,114,5,116,0,0,109,110,
	5,76,0,0,110,111,5,73,0,0,111,112,5,83,0,0,112,114,5,84,0,0,113,105,1,0,
	0,0,113,109,1,0,0,0,114,24,1,0,0,0,115,116,5,116,0,0,116,117,5,97,0,0,117,
	118,5,98,0,0,118,119,5,108,0,0,119,126,5,101,0,0,120,121,5,84,0,0,121,122,
	5,65,0,0,122,123,5,66,0,0,123,124,5,76,0,0,124,126,5,69,0,0,125,115,1,0,
	0,0,125,120,1,0,0,0,126,26,1,0,0,0,127,128,5,102,0,0,128,129,5,114,0,0,
	129,130,5,111,0,0,130,136,5,109,0,0,131,132,5,70,0,0,132,133,5,82,0,0,133,
	134,5,79,0,0,134,136,5,77,0,0,135,127,1,0,0,0,135,131,1,0,0,0,136,28,1,
	0,0,0,137,138,5,119,0,0,138,139,5,104,0,0,139,140,5,101,0,0,140,141,5,114,
	0,0,141,148,5,101,0,0,142,143,5,87,0,0,143,144,5,72,0,0,144,145,5,69,0,
	0,145,146,5,82,0,0,146,148,5,69,0,0,147,137,1,0,0,0,147,142,1,0,0,0,148,
	30,1,0,0,0,149,150,5,97,0,0,150,151,5,110,0,0,151,156,5,100,0,0,152,153,
	5,65,0,0,153,154,5,78,0,0,154,156,5,68,0,0,155,149,1,0,0,0,155,152,1,0,
	0,0,156,32,1,0,0,0,157,158,5,115,0,0,158,159,5,111,0,0,159,160,5,114,0,
	0,160,166,5,116,0,0,161,162,5,83,0,0,162,163,5,79,0,0,163,164,5,82,0,0,
	164,166,5,84,0,0,165,157,1,0,0,0,165,161,1,0,0,0,166,34,1,0,0,0,167,168,
	5,100,0,0,168,169,5,101,0,0,169,170,5,115,0,0,170,176,5,99,0,0,171,172,
	5,68,0,0,172,173,5,69,0,0,173,174,5,83,0,0,174,176,5,67,0,0,175,167,1,0,
	0,0,175,171,1,0,0,0,176,36,1,0,0,0,177,179,7,1,0,0,178,177,1,0,0,0,179,
	180,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,38,1,0,0,0,182,188,5,39,
	0,0,183,187,8,2,0,0,184,185,5,39,0,0,185,187,5,39,0,0,186,183,1,0,0,0,186,
	184,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,191,1,0,
	0,0,190,188,1,0,0,0,191,192,5,39,0,0,192,40,1,0,0,0,14,0,48,67,103,113,
	125,135,147,155,165,175,180,186,188,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MDQLLexer.__ATN) {
			MDQLLexer.__ATN = new ATNDeserializer().deserialize(MDQLLexer._serializedATN);
		}

		return MDQLLexer.__ATN;
	}


	static DecisionsToDFA = MDQLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}